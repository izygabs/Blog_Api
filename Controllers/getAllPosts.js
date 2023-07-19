const { post } = require("../Model/contentSchema");

module.exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await post.find({});
    // console.log(posts);
    res.json(posts).status(201);
  } catch (error) {
    res.send("Post not found").status(401);
  }
};
