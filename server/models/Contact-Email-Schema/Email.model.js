const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "You must provide a first name"],
    minLength:2,
    maxLength:20,
  },
  lastName: {
    type: String,
    required: [true, "You must provide a last name"],
    minLength:2,
    maxLength:20,
  },
  email: {
    type: String,
    required: [true, "You must provide an email address"],
    match: [/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/, "Invalid Email Adress"],
  },
  subject: {
    type: String,
    required: [true, "You must provide a subject"],
    minLength: 5,
    maxLength: 100,
  },
  message: {
    type: String,
    required: [true, "You must provide a message"],
    minLength: 10,
    maxLength: 500
  }
})

const ContactEmail = mongoose.model("Email", EmailSchema);

module.exports = ContactEmail;