const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const route = require("./Routes/allRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/Blog_Api");

app.post("/home", (req, res) => {
  res.send("I see you");
});

app.use(express.json());

app.use(route);

app.listen(4500, () => {
  console.log("Server is served on port" + " " + 4500);
});
