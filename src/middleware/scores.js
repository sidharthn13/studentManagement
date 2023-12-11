const express = require('express');
const {body,validationResult}= require('express-validator');
const validateScoresData = {
    validateInputFields:[
        express.json(),
        body()
      .custom((payload) => {
        const keys = Object.keys(payload).length;
        if (keys != 3) {
          throw new Error("Input data must contain 3 field");
        }
        return true;
      })
      .bail(),
      body("score").exists().isInt({ min: 0, max:100 }).withMessage("invalid score").toInt()
    ]
}
module.exports = validateScoresData