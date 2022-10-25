const express = require("express")
const { listmenu } = require("../controller/MenuController")

const router = express.Router()

router.post("/listmenu",listmenu)

module.exports = router