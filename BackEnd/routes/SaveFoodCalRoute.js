const express = require("express")
const { saveFoodCal } = require("../controller/SaveActCalController")
const router = express.Router()

router.post("/savefoodcal",saveFoodCal)


module.exports = router