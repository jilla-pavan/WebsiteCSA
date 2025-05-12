import nodemailer from 'nodemailer';

export const createTransporter = () => {
  // Validate email configuration
  if (!process.env.EMAIL_USER) {
    throw new Error('EMAIL_USER environment variable is not set');
  }
  if (!process.env.EMAIL_PASSWORD) {
    throw new Error('EMAIL_PASSWORD environment variable is not set');
  }

  // Create transporter with detailed configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false // Helps avoid self-signed certificate issues
    },
    debug: true, // Enable debug logs
    logger: true // Enable logger
  });

  // Verify transporter configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.error('Email transporter verification failed:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });

  return transporter;
}; 