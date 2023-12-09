const express = require('express')
const {body, validationResult} = require("express-validator")
const validateUsersData = [
    express.json(),
    body().custom((payload) =>{
        if(!typeof(payload)==Object){throw new Error("input data must be json object")}
        const keys = Object.keys(payload).length
        if(keys !== 4){throw new Error("login data must have exactly 4 fields")};
        if(!payload.email || !payload.password|| !payload.name || !payload.role){
            throw new Error('input data must have email, password, name and role fields')
        };
        return true;
    }).bail(),
    body().custom((payload)=>{
      regexEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      if(!regexEmail.test(payload.email)){throw new Error("Invalid email ID")}
      return true;
    }).bail(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
]
module.exports = validateUsersData