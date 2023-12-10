const departmentsService = require("../service/departments")
const departmentsController = {
    createDepartment:departmentsService.create,
    getDepartments:departmentsService.getAll
}
module.exports = departmentsController