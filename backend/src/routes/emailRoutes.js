import express from 'express';
import { sendEmail, sendEmailWithAttachments, sendBulkEmails } from '../controllers/emailController.js';

const router = express.Router();

// Email routes
router.post('/send-email', sendEmail);
router.post('/send-email-with-attachments', sendEmailWithAttachments);
router.post('/send-bulk-emails', sendBulkEmails);

export default router; 