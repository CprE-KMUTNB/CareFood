const express = require("express")
const { deletes } = require("../controller/DeleteAccountCOntroller")
const router = express.Router()

router.post("/deletes",deletes)

module.exports = router