const express = require("express");
const router = express.Router();
// const rolesSampleController = require("../controllers/rolesSample.js");

// router.get('/sample', rolesSampleController.get);

router.get('/sample',(req,res)=>res.end("req received"));


module.exports = router;