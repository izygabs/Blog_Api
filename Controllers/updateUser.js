const { register } = require("../Model/registerSchema");

module.exports.updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const name = req.header.userName;
    const user = await register.findByIdAndUpdate(id, { userName: name });
    if (!user) {
      res.send("Invalid credentials").status(401);
    } else {
      res.json(user).status(201);
    }
  } catch (error) {
    res.send("Unable to update data").status(400);
  }
};
