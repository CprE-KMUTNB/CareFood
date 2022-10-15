const express = require("express")
const { search } = require("../controller/SearchController")
const router = express.Router()

router.post("/register",search)

module.exports = router