import type { NextApiRequest, NextApiResponse } from 'next';
import { ContactFormResponse } from '../../types';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactFormResponse>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !email.includes('@') || !message) {
      return res.status(400).json({ message: 'Invalid input. Please fill all fields.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your email provider
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission</p><br>
             <p><strong>Name: </strong> ${name}</p>
             <p><strong>Email: </strong> ${email}</p>
             <p><strong>Message: </strong> ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Thank you! Your message has been sent successfully.' });
      console.log('sent');
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'There was an error sending your message. Please try again.' });
      console.log('notsent');
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
