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
app.use(cors({
  origin: 'http://localhost:5173'
}))

//routes
app.use('/contacts', contactRouter)

const start = async (req,res) => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

start();
