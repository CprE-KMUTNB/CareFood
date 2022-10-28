const express = require("express")
const { listact } = require("../controller/ActController")
const router = express.Router()

router.post("/listact",listact)

module.exports = router