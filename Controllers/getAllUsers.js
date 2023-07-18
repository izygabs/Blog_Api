const { register } = require("../Model/registerSchema");

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await register.find({});
    res.json(allUsers).status(201);
  } catch (error) {
    res.send("Users not found").status(401);
  }
};
