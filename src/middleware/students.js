const express = require("express");
const {body, param, validationResult}= require("express-validator");
const validateStudentsData = {
    validateInputFields: [
        express.json(),
        body()
          .custom((payload) => {
            const nameRegex = /^[A-Za-z\s]+$/
            const keys = Object.keys(payload).length;
            if (keys != 2) {
              throw new Error("Input data must contain only 2 field");
            }
            if (!payload.name) {
              throw new Error("name field is missing");
            }
            if(!nameRegex.test(payload.name)){throw new Error("Invalid name format")}
            return true;
          })
          .bail(),
        body("department").exists().isInt().toInt(),
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
}
module.exports = validateStudentsData;
