const { post } = require("../Model/contentSchema");

module.exports.deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.send("Invalid id").status(401);
    } else {
      const del = await post.findByIdAndDelete(id);
      res.json(del).status(201);
    }
  } catch (error) {
    res.send("Unable to delete post").status(401);
  }
};
