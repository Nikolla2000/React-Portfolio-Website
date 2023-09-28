require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require('cors');

//connectDB
const connectDB = require("./db/connect");

//Port
const port = process.env.PORT || 3000;

//routers
const contactRouter = require('./routes/Contact.router')

//
app.use(express.static("./public"));
app.use(express.json());

//cors connection
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://nikolauzunov.netlify.app'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable credentials (e.g., cookies)
  optionsSuccessStatus: 204, // Return a 204 status code for preflight requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Add any custom headers you need
};

app.use(cors(corsOptions));

//routes
app.use('/contacts', contactRouter)

const start = async (req,res) => {
  try {
    await connectDB();
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

start();
