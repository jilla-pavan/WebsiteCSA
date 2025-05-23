const API_URL = 'http://localhost:3001/api';

// Send a simple email
export const sendEmail = async ({ to, type, data }) => {
  try {
    // Validate required parameters
    if (!to) {
      throw new Error('Recipient email (to) is required');
    }
    if (!type) {
      throw new Error('Email type is required');
    }
    if (!data) {
      throw new Error('Email data is required');
    }

    // Validate email format
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(to)) {
      throw new Error('Invalid email format');
    }

    console.log('Attempting to send email with:', { to, type, data });
    
    // Ensure API URL ends with /api and construct the endpoint correctly
    const baseUrl = API_URL.endsWith('/api') ? API_URL : `${API_URL}/api`;
    const response = await fetch(`${baseUrl}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        type,
        data,
      }),
    });

    const responseData = await response.json();
    console.log('Server response:', responseData);
    
    if (!response.ok) {
      throw new Error(responseData.error || `Failed to send email: ${response.status}`);
    }

    console.log('Email sent successfully:', responseData.messageId);
    return { success: true, messageId: responseData.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error.message,
      details: error.stack
    };
  }
};

// Send email with attachments
export const sendEmailWithAttachments = async ({ to, subject, text, html, attachments }) => {
  try {
    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('text', text);
    formData.append('html', html);
    
    if (attachments) {
      attachments.forEach((attachment, index) => {
        formData.append(`attachment${index}`, attachment);
      });
    }

    const response = await fetch(`${API_URL}/send-email-with-attachments`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send email with attachments');
    }

    console.log('Email with attachments sent successfully:', data.messageId);
    return { success: true, messageId: data.messageId };
  } catch (error) {
    console.error('Error sending email with attachments:', error);
    return { success: false, error: error.message };
  }
};

// Send bulk emails
export const sendBulkEmails = async (recipients, { subject, text, html }) => {
  try {
    const response = await fetch(`${API_URL}/send-bulk-emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        recipients,
        subject,
        text,
        html,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to send bulk emails');
    }

    return { success: true, results: data.results };
  } catch (error) {
    console.error('Error sending bulk emails:', error);
    return { success: false, error: error.message };
  }
}; 