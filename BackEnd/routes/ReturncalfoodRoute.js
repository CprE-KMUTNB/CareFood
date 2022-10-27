const express = require("express")
const { returncalfood } = require("../controller/ReturnusercalfoodController")
const router = express.Router()

router.post("/returncalfood",returncalfood)


module.exports = router