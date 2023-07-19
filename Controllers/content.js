const mongoose = require("mongoose");
const { contentPost } = require("../Validators/validate");
const { post } = require("../Model/contentSchema");

module.exports.contentCreate = async (req, res, next) => {
  const { error, value } = contentPost(req.body);
  // console.log(value.title);
  if (error) {
    res.status(404);
  } else {
    try {
      const creation = new post({
        title: value.title,
        content: value.content,
      });
      await creation.save();
      res.send("Content uploaded successfully");
      // console.log(creation);
    } catch (error) {
      console.log(error);
      res.status(404);
    }
  }
};
