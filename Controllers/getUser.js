const { register } = require("../Model/registerSchema");

module.exports.getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await register.findById(id);
    if (!user) {
      res.send("Invalid id").status(401);
    } else {
      res.json(user).status(201);
    }
  } catch (error) {
    // console.log(error);
    res.send("User not found").status(404);
  }
};
