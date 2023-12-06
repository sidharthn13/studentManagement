const express = require("express");
const rolesSampleRouter = express.Router();
const rolesSampleController = require("../controllers/rolesSample.js");
const validateInput = require("../middleware/rolesSample.js");

rolesSampleRouter.get("/sample-roles", rolesSampleController.get);

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
  rolesSampleController.post
);
module.exports = { rolesSampleRouter };
