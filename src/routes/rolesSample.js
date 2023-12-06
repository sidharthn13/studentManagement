const express = require('express')
const router = express.Router()
const rolesSampleController = require("../controllers/rolesSample.js");
const validateInput = require("../middleware/rolesSample.js")


router.get('/sample-roles',rolesSampleController.get);

router.post('/sample-roles',validateInput,rolesSampleController.post)
module.exports = router;