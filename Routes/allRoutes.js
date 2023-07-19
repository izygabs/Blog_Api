const express = require("express");
const { signUp } = require("../Controllers/register");
const { contentCreate } = require("../Controllers/content");
const { getAllUsers } = require("../Controllers/getAllUsers");
const { login } = require("../Controllers/login");
const { verifyToken } = require("../middlewares/jwt");
const { getUser } = require("../Controllers/getUser");
const { updateUser } = require("../Controllers/updateUser");
const { getAllPosts } = require("../Controllers/getAllPosts");
const { getPost } = require("../Controllers/getPost");
const { updatePost } = require("../Controllers/updatePost");
const { deletePost } = require("../Controllers/deletePost");

const route = express.Router();

route.post("/api/auth/register", signUp);

route.post("/api/auth/login", login);

route.get("/api/users", verifyToken, getAllUsers);

route.get("/api/users/:id", verifyToken, getUser);

route.put("/api/users/:id", verifyToken, updateUser);

route.post("/api/posts", contentCreate);

route.get("/api/posts", verifyToken, getAllPosts);

route.get("/api/posts/:id", verifyToken, getPost);

route.put("/api/posts/:id", verifyToken, updatePost);

route.delete("/api/posts/:id", verifyToken, deletePost);

module.exports = route;
