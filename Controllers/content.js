const mongoose = require("mongoose");
const { contentPost } = require("../Validators/validate");
const { post } = require("../Model/contentSchema");

module.exports.contentCreate = async (req, res) => {
  const { error, value } = contentPost(req.body);
  if (error) {
    res.status(404);
  } else {
    try {
      const creation = new post({
        title: value.title,
        content: value.content,
      });
      creation.save().then(() => {
        res.send("Content uploaded successfully");
      });
    } catch (error) {
      res.status(404);
    }
  }
};
