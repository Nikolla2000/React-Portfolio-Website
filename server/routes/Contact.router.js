const express = require('express');
const router = express.Router();
const ContactEmail = require('../models/Contact-Email-Schema/Email.model');
const sendEmail = require("../controllers/Contacts.controller")

// router.get('/', getAllContactEmails)

router.post('/sendEmail', sendEmail)

module.exports = router;