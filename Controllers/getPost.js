const { post } = require("../Model/contentSchema");

module.exports.getPost = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.send("Invalid id").status(400);
    } else {
      const cont = await post.findById(id);
      res.json(cont).status(201);
    }
  } catch (error) {
    res.send("Post not found").status(401);
  }
};
