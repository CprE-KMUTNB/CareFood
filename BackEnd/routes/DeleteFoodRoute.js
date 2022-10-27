const express = require("express")
const { deletesfood } = require("../controller/DeleteFoodController")
const router = express.Router()

router.post("/deletesfood",deletesfood)

module.exports = router