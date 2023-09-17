const express = require('express');
const router = express.Router();
const ContactEmail = require('../models/Contact-Email-Schema/Email.model');
const { sendContactEmail, getAllContactEmails } = require("../controllers/Contacts.controller");

router.get('/', getAllContactEmails)

router.post('/sendEmail', sendContactEmail)

module.exports = router;