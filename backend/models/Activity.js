const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: String,
  type: String,
  category: String,
  co2: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Activity", activitySchema);
