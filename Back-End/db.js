const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.mongoURI;

const connection = mongoose.connect(mongoURI);

module.exports = connection;
