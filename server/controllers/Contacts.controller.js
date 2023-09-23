const nodemailer = require('nodemailer');
const ContactEmail = require('../models/Contact-Email-Schema/Email.model');

const gcpUser = process.env.GCP_USER;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: gcpUser,
    pass: 'vsjd bgst ibet mmzh',
  },
});

const sendEmail = async (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: formData.email,
    to: gcpUser,
    subject: formData.subject,
    text: `From: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

    const contactEmail = new ContactEmail({
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    await contactEmail.save();
    console.log('Email data saved to the database');

    res.status(200).json({ message: 'Email sent and data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email or save data' });
  }
};

module.exports = sendEmail;
