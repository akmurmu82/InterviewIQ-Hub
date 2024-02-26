const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const GuestModel = require("../models/guestModel");
const QuestionModel = require("../models/questionModel");

const guestRouter = express.Router();

// Guest register route
guestRouter.post("/register", async (req, res) => {
  const { name, marks, email, phoneNo, techStack, englishFluency } = req.body;

  try {
    // Create a new guest instance
    const newGuest = new GuestModel({
      name,
      email,
      phoneNo,
      marks,
      techStack,
      englishFluency,
    });

    // Save the new guest to the database
    await newGuest.save();

    // Respond with a success message
    res.status(201).json({ message: "New guest has applied for Assessment" });
  } catch (error) {
    // Handle any errors
    console.error("Error registering guest:", error);
    res.status(500).json({ message: "Failed to register guest" });
  }
});

// Login route
guestRouter.post("/login", async (req, res) => {
  const { email, phoneNo, password } = req.body;

  try {
    // Find the user by email
    const guestDb = await GuestModel.findOne({ email });

    // If no user is found, respond with a 404 status
    if (!guestDb) {
      return res.status(404).json({ message: "Guest not found" });
    }

    // Compare passwords if user is found
    bcrypt.compare(password, guestDb.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ foo: "gaf" }, "gaf");
        res.status(200).json({ message: "Login Successful", token: token });
      } else {
        res.status(401).json({ message: "Wrong credentials" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Assessment route
guestRouter.get("/assessment", async (req, res) => {
  try {
    const assessmentQuesArr = await QuestionModel.find();
    res.status(200).json({ data: assessmentQuesArr });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// New route to handle updating user details based on assessment score
guestRouter.post("/assessment/update", async (req, res) => {
  const { email, score } = req.body;

  try {
    // Find the user by email
    // const guest = await GuestModel.findOne({ email });
    const guest = await GuestModel.updateOne(
      { email },
      { $set: { marks: score } }
    );

    // If no user is found, respond with a 404 status
    if (!guest) {
      return res.status(404).json({ message: "Guest not found" });
    }

    // Check if the score is greater than 3
    // if (score > 3) {
    //   // Update the user's marks
    //   guest.marks = score;
    //   await guest.save();
    console.log(guest);
    // }

    res.status(200).json({ message: "User details updated successfully" });
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ message: "Failed to update user details" });
  }
});

module.exports = guestRouter;
