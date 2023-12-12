const departments = require("../models/departments");
const courses = require("../models/courses");
const coursesRepository = {
  findDepartment: async function (id) {
    result = await departments.findByPk(id);
    return result;
  },
  createCourse: async function (data) {
    result = await courses.findOrCreate({
      where: { courseName: data.courseName },
      defaults: { courseName: data.courseName },
    });
    return result;
  },
  getByID: async function (id) {
    const result = await courses.findByPk(id);
    return result;
  },
  mapCourseToDepartment: async function (courseInstance, departmentsInstance) {
    const result = await departmentsInstance.addCourses(courseInstance, {
      through: "DepartmentsCourses",
    });
  },
};
module.exports = coursesRepository;
