const express = require("express")
const { info } = require("../controller/AgregateController")
const router = express.Router()

router.post("/info",info)

module.exports = router