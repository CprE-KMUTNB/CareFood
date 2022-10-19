const express = require("express")
const { edit } = require("../controller/EditController")
const router = express.Router()

router.post("/edit",edit)

module.exports = router