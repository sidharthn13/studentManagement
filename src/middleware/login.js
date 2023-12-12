const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const validateLoginData = [
  app.use(express.json()),
  body()
    .custom((payload) => {
      const keys = Object.keys(payload).length;
      if (keys !== 2) {
        throw new Error("login data must have only 2 fields");
      }
      if (!payload.email || !payload.password) {
        throw new Error("login data must have email and password fields");
      }
      return true;
    })
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
module.exports = validateLoginData;
