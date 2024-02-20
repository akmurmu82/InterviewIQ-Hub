const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const GuestModel = require("../models/guestModel");

const guestRouter = express.Router();

// Guest register route
guestRouter.post("/register", async (req, res) => {
  const { name, email, phoneNo, password, techStack, englishFluency } =
    req.body;

  try {
    // Hash the password
    bcrypt.hash(password, 5, async function (err, hash) {
      // Create a new guest instance
      const newGuest = new GuestModel({
        name,
        email,
        phoneNo,
        password: hash, // Store the hashed password
        techStack,
        englishFluency,
      });

      // Save the new guest to the database
      await newGuest.save();

      // Respond with a success message
      res.status(201).json({ message: "New user has been created" });
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: error.message });
  }
});

// Function to hash the password
async function hashPassword(password) {
  // Generate a salt and hash the password
  const hashedPassword = await bcrypt.hash(password, 5);
  return hashedPassword;
}

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

module.exports = guestRouter;
