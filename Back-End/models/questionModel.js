const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  techStack: { type: String, require: true },
});

const QuestionModel = mongoose.model("question", questionSchema);

module.exports = QuestionModel;
