const performanceReportRepository = require("../repository/performanceReport");
const performanceReportService = {
  getReport: async (req, res) => {
    try {
      const result = await performanceReportRepository.getPerformanceReport();
      return res.status(200).json({ Report: result });
    } catch (error) {
      return res.status(500).json({ Error: error });
    }
  },
};
module.exports = performanceReportService;
