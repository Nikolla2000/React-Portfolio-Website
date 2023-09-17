const express = require('express');
const router = express.Router()
const ContactEmail = require('../models/Contact-Email-Schema/Email.model')

router.get('/', async (req, res) => {
  try {
    const emails = await ContactEmail.find()
    res.status(200).json(emails)
  } catch (error) {
    console.log('Error retrieving emails:', error);
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.post('/sendEmail', async (req, res) => {
  try {
    const email = new ContactEmail(req.body)
    await email.save()
    res.status(201).json(email)
  } catch (error) {
    console.log('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router;