const sequelize = require("../config/database");
const performanceReportRepository = {
  getPerformanceReport: async function () {
    const joinQuery = `
            SELECT "students"."id" as "studentID", "students"."name" as "studentName", "students"."department" as "departmentID",
            "DepartmentsCourses"."courseId" as "courseID", "scores"."score"
            FROM "students" INNER JOIN "DepartmentsCourses" ON "students"."department" = "DepartmentsCourses"."departmentId"
            INNER JOIN "scores" ON "DepartmentsCourses"."courseId" = "scores"."courseID"        
            `;
    const result = await sequelize.query(joinQuery);
    return result;
  },
};
module.exports = performanceReportRepository;
