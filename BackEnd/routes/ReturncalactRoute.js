const express = require("express")
const { returncalact } = require("../controller/ReturnusercalactController")
const router = express.Router()

router.post("/returncalact",returncalact)


module.exports = router