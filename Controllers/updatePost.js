const { post } = require("../Model/contentSchema");

module.exports.updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const content = req.body.content;
    if (!id) {
      res.send("Invalid id").status(401);
    } else {
      const cont = await post.findByIdAndUpdate(id, { content: content });
      res.json(cont).status(201);
    }
  } catch (error) {
    res.send("Update failed").status(401);
  }
};
