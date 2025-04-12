import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body as ContactFormData;

  // Validate inputs
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide all required fields' 
    });
  }

  try {
    // Here you would typically use an email service like SendGrid, Mailgun, etc.
    // For now, this is a placeholder that would be replaced with actual email sending code
    // This could use a service like SendGrid, AWS SES, Mailgun, etc.
    
    // Example with a theoretical email service:
    /*
    await axios.post('https://api.emailservice.com/send', {
      apiKey: process.env.EMAIL_API_KEY,
      to: 'info@actionstaffing.co.uk',
      from: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        
        Message:
        ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });
    */

    // For now, just simulate success since we don't have an actual email service
    console.log('Contact form submission:', { name, email, phone, subject, message });
    
    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully. We will contact you soon!' 
    });
  } catch (error) {
    console.error('Error sending contact form:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
} 