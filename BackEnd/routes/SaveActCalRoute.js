const express = require("express")
const { saveActCal } = require("../controller/SaveActCalController")
const router = express.Router()

router.post("/saveactcal",saveActCal)


module.exports = router