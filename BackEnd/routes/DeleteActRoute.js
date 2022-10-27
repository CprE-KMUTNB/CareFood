const express = require("express")
const { deletesact } = require("../controller/DeleteActController")
const router = express.Router()

router.post("/deletesact",deletesact)

module.exports = router