const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const route = require("./Routes/allRoutes");

mongoose.connect("mongodb://127.0.0.1:27017/Blog_Api", {
  useNewUrlParser: true,
});

dotenv.config({ path: "./data.env" });

app.post("/home", (req, res) => {
  res.send("I see you");
});

app.use(express.json());

app.use(route);

app.listen(4500, () => {
  console.log("Server is served on port" + " " + 4500);
});
