const express = require("express");
const { body, validationResult } = require("express-validator");
const validateInputData = [
  express.json(),
  body()
    .custom((payload) => {
      const keys = Object.keys(payload).length;
      if (keys != 2) {
        throw new Error("Input data must contain 2 field");
      }
      if (!payload.courseName) {
        throw new Error("courseName field is missing");
      }
      return true;
    })
    .bail(),
  body("departmentID").exists().isInt().toInt(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
module.exports = validateInputData;
