const performanceReportService = require("../service/performanceReport");
const performanceReportController = {
  getReport: performanceReportService.getReport,
};
module.exports = performanceReportController;
