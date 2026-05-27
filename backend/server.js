const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/tailorDB")
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
app.post("/bookings", async (req, res) => {

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
  console.log("Server running");
});