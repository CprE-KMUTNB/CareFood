const express = require("express")
const { search } = require("../controller/SearchController")
const router = express.Router()

router.post("/search",search)

module.exports = router