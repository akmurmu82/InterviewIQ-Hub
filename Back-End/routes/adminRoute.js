const express = require("express");
const guestModel = require("../models/guestModel");

const adminRoute = express.Router();

adminRoute.get("/guests", async (req, res) => {
  try {
    const guestsArr = await guestModel.find();
    if (guestsArr) {
      res.status(200).json({ message: "Fetched the guests", data: guestsArr });
    } else {
      res.status(404).json({ message: "Guests not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = adminRoute;
