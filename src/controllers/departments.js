const departmentsService = require("../service/departments")
const departmentsController = {
    createDepartment:departmentsService.create,
}
module.exports = departmentsController