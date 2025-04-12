const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    // Parse the JSON body
    const data = JSON.parse(event.body);
    const { name, email, phone, subject, message } = data;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: 'Please provide all required fields',
        }),
      };
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Create the email content
    const mailOptions = {
      from: `"Action Staffing Website" <${process.env.EMAIL_USER}>`,
      to: ['info@actionstaffing.co.uk', 'muhammad@actionstaffing.co.uk'],
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
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Your message has been sent successfully. We will contact you soon!',
      }),
    };
  } catch (error) {
    console.error('Error sending contact form:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Failed to send message. Please try again later.',
      }),
    };
  }
}; 