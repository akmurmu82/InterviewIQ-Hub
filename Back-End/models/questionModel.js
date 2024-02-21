const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  id: { type: Number, require: true },
  question: { type: String, require: true },
  options: { type: Array, require: true },
  answer: { type: String, require: true },
  skills: { type: Array, require: true },
});

const QuestionModel = mongoose.model("assessmentQuestion", questionSchema);

module.exports = QuestionModel;
