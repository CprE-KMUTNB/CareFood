const express = require("express")
const { caltoday } = require("../controller/CalculateTodayCal")
const router = express.Router()

router.post("/caltoday",caltoday)

module.exports = router