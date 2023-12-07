const express = require("express");
const rolesSampleRouter = express.Router();
const rolesSampleController = require("../controllers/rolesSample.js");
const validateInput = require("../middleware/rolesSample.js");
//setting up swagger docs
const swaggerUi = require("swagger-ui-express");
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
        url: `http://localhost:3000/v1`,
      },
    ],
  },
  apis: ["./routes/rolesSample.js"], // specify the path to API routes files
};
const swaggerSpec = swaggerJSDocs(swaggerOptions);
rolesSampleRouter.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);
// rolesSampleRouter.get("/api-docs",swaggerUi.setup(swaggerSpec)); // Serve Swagger UI at /api-docs endpoint
rolesSampleRouter.get("/sample-roles", rolesSampleController.getUsers);
/**
 * @swagger
 * /sample-roles:
 *   post:
 *     summary: Create a department
 *     description: Creates a new unique department and assigns a unique integer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             role: admin
 *     responses:
 *       200:
 *         description: department added
 *       400:
 *         description: Department already exists in the database
 */
rolesSampleRouter.post(
  "/sample-roles",
  validateInput,
  rolesSampleController.createUser
);
module.exports = { rolesSampleRouter };
