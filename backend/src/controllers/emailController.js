import { createTransporter } from '../config/emailConfig.js';
import { createAdminNotificationEmail, createUserConfirmationEmail, createMentorApplicationEmail } from '../config/emailTemplates.js';

export const sendEmail = async (req, res) => {
  try {
    const { to, type, data } = req.body;

    // Validate required fields
    if (!to) {
      throw new Error('Recipient email is required');
    }
    if (!type) {
      throw new Error('Email type is required');
    }
    if (!data) {
      throw new Error('Email data is required');
    }

    const transporter = createTransporter();
    if (!transporter) {
      throw new Error('Failed to create email transporter');
    }
    
    let emailContent;
    switch (type) {
      case 'USER_CONFIRMATION':
        emailContent = createUserConfirmationEmail(data);
        break;
      case 'ADMIN_NOTIFICATION':
        emailContent = createAdminNotificationEmail(data);
        break;
      case 'MENTOR_APPLICATION':
        emailContent = createMentorApplicationEmail(data);
        break;
      default:
        throw new Error(`Invalid email type: ${type}`);
    }
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      ...emailContent
    };

    console.log('Sending email with options:', {
      to,
      type,
      subject: emailContent.subject
    });

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

export const sendEmailWithAttachments = async (req, res) => {
  try {
    const { to, subject, text, html, attachments } = req.body;
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
      attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email with attachments sent successfully:', info.messageId);
    res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email with attachments:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const sendBulkEmails = async (req, res) => {
  try {
    const { recipients, subject, text, html } = req.body;
    const transporter = createTransporter();
    const results = [];

    for (const recipient of recipients) {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject,
        text,
        html,
      };

      const info = await transporter.sendMail(mailOptions);
      results.push({ email: recipient, success: true, messageId: info.messageId });
    }

    res.json({ success: true, results });
  } catch (error) {
    console.error('Error sending bulk emails:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}; 