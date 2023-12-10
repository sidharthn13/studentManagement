const express = require("express");
const { body, validationResult, param } = require("express-validator");
const validateDepartmentsData = {
  validateInputFields: [
    express.json(),
    body()
      .custom((payload) => {
        const keys = Object.keys(payload).length;
        if (keys != 1) {
          throw new Error("Input data must contain only one field");
        }
        if (!payload.departmentName) {
          throw new Error("departmentName field is missing");
        }
        return true;
      })
      .bail(),
    body()
      .custom((payload) => {
        const nameRegex = /^\S.*$/;
        if (!nameRegex.test(payload.departmentName)) {
          throw new Error("Please enter valid department name");
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
  ],
  sanitizeRequestParam:[
    param("id").exists().isInt().toInt(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();},
  ]
};

module.exports = validateDepartmentsData;
