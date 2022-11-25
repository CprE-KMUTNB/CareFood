const express = require("express")
const { returndate } = require("../controller/ReturnDateController")
const router = express.Router()

router.post("/returndate",returndate)

module.exports = router