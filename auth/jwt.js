const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

function toJWT(data) {
  return jwt.sign(data, jwtSecret, { expiresIn: "1h" });
}

function toData(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };
