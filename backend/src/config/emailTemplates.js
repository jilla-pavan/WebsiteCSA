export const createAdminNotificationEmail = (enrollmentData) => {
  const {
    name,
    email,
    mobile,
    status,
    educationLevel,
    degreeDetails,
    submittedAt,
    enrollmentId
  } = enrollmentData;

  return {
    subject: `New Enrollment`,
    text: `
New Course Enrollment

Enrollment ID: ${enrollmentId}
Name: ${name}
Status: ${status}
Education: ${educationLevel} - ${degreeDetails}
Contact: ${email} | ${mobile}
Date: ${new Date(submittedAt).toLocaleString()}
`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #444; max-width: 500px; margin: 0 auto; padding: 20px;">
  <div style="background: #fff; border: 1px solid #e1e1e1; border-radius: 5px; padding: 25px;">
    <div style="margin-bottom: 25px;">
      <p style="margin: 0 0 15px 0;">
        <strong style="color: #FF6B00; display: inline-block; width: 120px;">Name:</strong>
        <span style="color: #333;">${name}</span>
      </p>
      <p style="margin: 0 0 15px 0;">
        <strong style="color: #FF6B00; display: inline-block; width: 120px;">Current Status:</strong>
        <span style="color: #333;">${status}</span>
      </p>
      <p style="margin: 0 0 15px 0;">
        <strong style="color: #FF6B00; display: inline-block; width: 120px;">Education:</strong>
        <span style="color: #333;">${educationLevel} - ${degreeDetails}</span>
      </p>
      <p style="margin: 0 0 15px 0;">
        <strong style="color: #FF6B00; display: inline-block; width: 120px;">Email:</strong>
        <a href="mailto:${email}" style="color: #FF6B00; text-decoration: none;">${email}</a>
      </p>
      <p style="margin: 0;">
        <strong style="color: #FF6B00; display: inline-block; width: 120px;">Mobile:</strong>
        <span style="color: #333;">${mobile}</span>
      </p>
    </div>
  </div>
</body>
</html>
`
  };
};

export const createUserConfirmationEmail = (userData) => {
  const { name, enrollmentId, status, educationLevel, degreeDetails, email, mobile } = userData;
  
  return {
    subject: `Welcome to CSA`,
    text: `
Dear ${name},

Thank you for enrolling with us. We're excited to have you join us!

Enrollment ID: ${enrollmentId}

Your Details:
Status: ${status}
Education: ${educationLevel} - ${degreeDetails}
Contact: ${email} | ${mobile}

About CSA:
• Industry-experienced instructors
• Hands-on practical training
• Live project experience
• Placement assistance
• Flexible batch timings
• Free career counseling

Our team will contact you shortly with further details about your course schedule.

Best regards,
CSA Team
`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #444; max-width: 500px; margin: 0 auto; padding: 20px;">
  <div style="background: #fff; border: 1px solid #e1e1e1; border-radius: 5px; padding: 25px;">
    <div style="text-align: center; margin-bottom: 25px;">
      <h2 style="color: #FF6B00; margin: 0; font-size: 24px;">Welcome to Career Sure Academy</h2>
    </div>

    <p style="margin-bottom: 20px;">Dear ${name},</p>
    
    <p style="margin-bottom: 20px;">
      Thank you for enrolling with us. We're excited to have you join us!
    </p>

    <div style="margin-bottom: 20px;">
        <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Your Details</h3>
        <p style="margin: 0 0 10px 0;">
          <strong style="color: #FF6B00; display: inline-block; width: 120px;">Status:</strong>
          <span style="color: #333;">${status}</span>
        </p>
        <p style="margin: 0 0 10px 0;">
          <strong style="color: #FF6B00; display: inline-block; width: 120px;">Education:</strong>
          <span style="color: #333;">${educationLevel} - ${degreeDetails}</span>
        </p>
        <p style="margin: 0 0 10px 0;">
          <strong style="color: #FF6B00; display: inline-block; width: 120px;">Email:</strong>
          <a href="mailto:${email}" style="color: #FF6B00; text-decoration: none;">${email}</a>
        </p>
        <p style="margin: 0;">
          <strong style="color: #FF6B00; display: inline-block; width: 120px;">Mobile:</strong>
          <span style="color: #333;">${mobile}</span>
        </p>
    </div>

    <div style="background-color: #f9f9f9; border-radius: 5px; padding: 20px; margin: 25px 0;">
      <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px;">Why Choose CSA?</h3>
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="color: #FF6B00; position: absolute; left: 0;">✓</span>
          Industry-experienced instructors
        </li>
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="color: #FF6B00; position: absolute; left: 0;">✓</span>
          Hands-on practical training
        </li>
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="color: #FF6B00; position: absolute; left: 0;">✓</span>
          Live project experience
        </li>
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="color: #FF6B00; position: absolute; left: 0;">✓</span>
          Placement assistance
        </li>
        <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
          <span style="color: #FF6B00; position: absolute; left: 0;">✓</span>
          Flexible batch timings
        </li>
        <li style="margin-bottom: 0; padding-left: 25px; position: relative;">
          <span style="color: #FF6B00; position: absolute; left: 0;">✓</span>
          Free career counseling
        </li>
      </ul>
    </div>

    <p style="margin-bottom: 25px;">
      Our team will contact you shortly with further details about your course schedule.
      Please keep your Enrollment ID (${enrollmentId}) for future reference.
    </p>

    <div style="margin-top: 25px;">
      <p style="margin-bottom: 8px;">Best regards,</p>
      <p style="color: #FF6B00; font-weight: 500; margin: 0;">CSA Team</p>
    </div>
  </div>
</body>
</html>
`
  };
}; 