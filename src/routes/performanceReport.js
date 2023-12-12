const express = require("express");
const performanceReportController = require("../controllers/performanceReport");
const performanceReportRouter = express.Router();
const authenticationMiddleware = require("../middleware/authenticationMiddleware");
const authorizationMiddleware = require("../middleware/authorizationMiddleware");
performanceReportRouter.get(
  "/performance-report",
  authenticationMiddleware,
  authorizationMiddleware.accessByAdminAndStaff,
  performanceReportController.getReport
);
module.exports = performanceReportRouter;
