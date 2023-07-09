const express = require("express");
const route = express.Router();

const reg = require("../Controllers/register");

route.post("/register", reg.signUp);

module.exports = route;
