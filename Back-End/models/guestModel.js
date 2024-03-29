const mongoose = require("mongoose");

const guestSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  marks: { type: Number, require: true },
  phoneNo: { type: String, require: true },
  englishFluency: { type: Number, require: true },
  techStack: { type: Array, require: true },
});

const questionSchema = mongoose.Schema({
  id: { type: Number, require: true },
  question: { type: String, require: true },
  options: { type: Array, require: true },
  answer: { type: String, require: true },
  skills: { type: Array, require: true },
});

const GuestModel = mongoose.model("guest", guestSchema);

module.exports = GuestModel;
