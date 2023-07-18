const { registration } = require("../Validators/validate");
const { register } = require("../Model/registerSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.secretToken;

module.exports.login = async (req, res) => {
  const { error, value } = registration(req.body);
  if (error) return res.status(400).send(error.message);
  const logs = await register.findOne({ userName: value.userName });
  if (logs === null) {
    res.status(400).send("invalid credentials");
  } else {
    try {
      const verify = await bcrypt.compare(value.password, logs.password);
      if (!verify) {
        res.status(400).send("invalid credentials");
      } else {
        const token = jwt.sign({ username: logs.userName }, secret, {
          expiresIn: "1h",
        });
        res.status(200).send(`Welcome Back ${value.username} \n ${token}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
