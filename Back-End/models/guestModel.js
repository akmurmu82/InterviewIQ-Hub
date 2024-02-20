const mongoose = require("mongoose");

const guestSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phoneNo: { type: String, require: true },
  englishFluency: { type: Number, require: true },
  techStack: { type: Array, require: true },
});

const GuestModel = mongoose.model("guest", guestSchema);

module.exports = GuestModel;
