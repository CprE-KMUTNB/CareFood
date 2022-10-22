const express = require("express")
const { calCal } = require("../controller/CalculateCalController")
const router = express.Router()

router.post("/calCal",calCal)

module.exports = router