const departmentsService = require("../service/departments")
const departmentsController = {
    createDepartment:departmentsService.create,
    getDepartments:departmentsService.getAll,
    getDepartmentByID:departmentsService.getByID,
}
module.exports = departmentsController