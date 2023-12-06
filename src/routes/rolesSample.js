const express = require('express')
const rolesSampleRouter = express.Router()
const rolesSampleController = require("../controllers/rolesSample.js");
const validateInput = require("../middleware/rolesSample.js")

//using swagger dependencies
const swaggerJSDocs = require("swagger-jsdoc");
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Student Management API Documentation ",
        version: "1.0.0",
        description: "Manage student and department records using postgresql",
      },
      servers: [
        {
          url: `http://localhost:3000`,
        },
      ],
    },
    apis: ["./rolesSample.js"], // specify the path to API routes files
  };
const swaggerSpec = swaggerJSDocs(swaggerOptions);

rolesSampleRouter.get('/sample-roles',rolesSampleController.get);
rolesSampleRouter.post('/sample-roles',validateInput,rolesSampleController.post)
module.exports = {rolesSampleRouter,swaggerSpec};