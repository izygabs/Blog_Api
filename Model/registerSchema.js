const mongoose = require("mongoose");

module.exports.registerSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "This field is required"],
    minlength: 6,
    unique: true,
    maxlength: 60,
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});
