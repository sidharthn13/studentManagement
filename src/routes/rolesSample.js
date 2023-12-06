const express = require('express')
const router = express.Router()
const rolesSampleController = require("../controllers/rolesSample.js");



router.get('/sample-roles',rolesSampleController.get);
module.exports = router;