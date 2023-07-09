const mongoose = require("mongoose");
const reg = require("../Model/registerSchema");
const { registration } = require("../Validators/validate");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = mongoose.model("registration", reg.registerSchema);

module.exports.signUp = async (req, res) => {
  const { error, value } = registration(req.body);
  if (error) {
    res.status(404).send(error);
  } else {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(value.password, salt);
      const user = new register({
        userName: value.userName,
        password: hashedPassword,
      });
      user.save().then(() => {
        res.send("Registration successful");
      });
    } catch (error) {
      res.status(404).send(error);
    }
  }
};
