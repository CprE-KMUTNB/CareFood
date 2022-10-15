const express = require("express")
const { tests } = require("../controller/TestController")
const router = express.Router()

router.post('/test',tests)

module.exports = router