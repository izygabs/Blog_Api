const express = require("express");
const { signUp } = require("../Controllers/register");
const { contentCreate } = require("../Controllers/content");
const { getAllUsers } = require("../Controllers/getAllUsers");
const { login } = require("../Controllers/login");
const { verifyToken } = require("../middlewares/jwt");
const { getUser } = require("../Controllers/getUser");
const { putUser } = require("../Controllers/putUser");

const route = express.Router();

route.post("/api/auth/register", signUp);

route.post("/api/auth/login", login);

route.get("/api/users", verifyToken, getAllUsers);

route.get("/api/users/:id", verifyToken, getUser);

route.put("/api/users/:id", verifyToken, putUser);

route.post("/api/posts", verifyToken, contentCreate);

route.get("/api/posts");

route.get("/api/posts/:id");

route.put("/api/posts/:id");

route.delete("/login");

module.exports = route;
