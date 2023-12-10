const departmentsService = require("../service/departments")
const departmentsController = {
    createDepartment:departmentsService.create,
    getDepartments:departmentsService.getAll,
    getDepartmentByID:departmentsService.getByID,
    deleteDepartment:departmentsService.deleteByID,
}
module.exports = departmentsController