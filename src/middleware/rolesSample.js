const express = require("express");
const app = express();
const { body,validationResult } = require("express-validator");
validateInput = [
    app.use(express.json()),
    body()
    .custom((payload, { req }) => {
      const keys = Object.keys(payload);
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (keys.length != 1) {
        throw new Error("Input should have exactly 1 key value pair");
      }
      if (!payload.role) {
        throw new Error("There must be a role key");
      }
      if (!nameRegex.test(payload.role)) {
        throw new Error("Invalid name format for user role");
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
]
module.exports = validateInput