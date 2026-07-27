require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// const mongoUrl = `mongodb+srv://gitstudy44_db_user:NLfUCre6NHUaG8g7@cluster0.a02zo3x.mongodb.net/?appName=Cluster0`
// mongoose.connect("mongodb://127.0.0.1:27017/tailorDB")
const mongoUrl = `mongodb://gitstudy44_db_user:NLfUCre6NHUaG8g7@ac-0ex38pq-shard-00-00.a02zo3x.mongodb.net:27017,ac-0ex38pq-shard-00-01.a02zo3x.mongodb.net:27017,ac-0ex38pq-shard-00-02.a02zo3x.mongodb.net:27017/?ssl=true&replicaSet=atlas-4p40p9-shard-0&authSource=admin&appName=Cluster0`
mongoose.connect(mongoUrl)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});

// Schema
const bookingSchema = new mongoose.Schema({

  name: String,
  phone: String,
  service: String,
  notes: String

});

// Model
const Booking = mongoose.model(
  "Booking",
  bookingSchema
);

// API Route
app.post("/api/bookings", async (req, res) => {

  try {

    const newBooking = new Booking(req.body);

    await newBooking.save();

    res.json({
      message: "Booking saved successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

process.env.MONGO_URL