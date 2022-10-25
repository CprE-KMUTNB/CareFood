const express = require("express")
const { saveActCal } = require("../controller/SaveFoodCalController")
const router = express.Router()

router.post("/saveactcal",saveActCal)


module.exports = router