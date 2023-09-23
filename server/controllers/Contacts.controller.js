const ContactEmail = require("../models/Contact-Email-Schema/Email.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors/bad-request")
const sendEmail = require("./EmailSender")

const sendContactEmail = async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  if(!firstName || !lastName || !email || !subject || !message) {
    throw new BadRequestError("Please fill all fields")
  }

  const newContactEmail = await ContactEmail.create({
    name: `${firstName} ${lastName}`,
    email: email,
    subject: subject,
    message: message,
  });

  if(!newContactEmail) {
    res
      .status(StatusCodes.EXPECTATION_FAILED)
      .send("Your message failed to send. Please try again.")
  }

  res.status(StatusCodes.ACCEPTED).json({
    mailContent: newContactEmail,
    message: "Contact mail sent successfully!",
  })

  const recipient = "nikolla.uzunov@gmail.com";
  const templateName = "contactEmailTemplate";

  sendEmail(
    newContactEmail.name,
    recipient,
    null,
    templateName,
    newContactEmail.email,
    newContactEmail.subject,
    newContactEmail.message
  );
};

const getAllContactEmails = async (req, res) => {
  try {
    const allEmails = await ContactEmail.find()
    res.status(200).json(allEmails)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  sendContactEmail,
  getAllContactEmails
}