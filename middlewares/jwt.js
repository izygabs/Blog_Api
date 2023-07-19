const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.verifyToken = (req, res, next) => {
  const secret = process.env.secretToken;
  try {
    const token = req.header("x-auth-token");
    // console.log(token);
    if (!token) {
      return res.status(403).send("Access denied.");
    } else {
      const decode = jwt.verify(token, secret, (error, decoded) => {
        if (error) {
          console.error("JWT verification failed:", error.message);
        } else {
          // console.log("Decoded token:", decoded);
          req.user = decoded;
        }
      });
      next();
    }
  } catch (error) {
    res.status(400).send("Invalid token");
  }
};
