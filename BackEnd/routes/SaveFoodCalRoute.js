const express = require("express")
const {saveFoodCal} = require("../controller/SaveFoodCalController")
const router = express.Router()

router.post("/savefoodcal",saveFoodCal)


module.exports = router