const express = require("express")
const { calAct } = require("../controller/CalculateActController")
const router = express.Router()

router.post("/calAct",calAct)

module.exports = router