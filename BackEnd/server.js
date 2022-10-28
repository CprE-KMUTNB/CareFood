const mongoose = require('mongoose')
const express = require('express')
const register = require("./routes/RegisterRoute")
const test = require("./routes/TestRoute")
const login = require("./routes/LoginRoute")
const edit = require("./routes/EditRoute")
const search = require("./routes/SearchRoute")
const calCal = require("./routes/CalculateCalRoute")
const calAct = require("./routes/CalculateCalActRoute")
const saveActCal = require("./routes/SaveActCalRoute")
const saveFoodCal = require("./routes/SaveFoodCalRoute")
const listMenu = require('./routes/MenuRoute')
const deletes = require("./routes/DeleteAccountRoute")
const info = require("./routes/infoRoute")
const deletesact = require("./routes/DeleteActRoute")
const deletesfood = require("./routes/DeleteFoodRoute")
const returncalfood = require("./routes/ReturncalfoodRoute")
const caltoday = require("./routes/CalculateTodayRoute")
const returncalact = require("./routes/ReturncalactRoute")
const listact = require("./routes/ActRoute")

require("dotenv").config()

const app = express()

var cors = require('cors');
app.use(cors());

// Connect DB
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:false
}
).then(()=>{
    console.log("ConnectDB Laew");
}).catch((err)=>{
    console.log(err);
})

const port = process.env.PORT

app.listen(port,()=>{
    console.log('Start Server Laew in port 5500');
})
app.use(express.json())

app.use('/api',test)
app.use('/api',register)
app.use('/api',login)
// app.use('/api',search)
app.use('/api',edit)
app.use('/api',search)
app.use("/api",calCal)
app.use("/api",calAct)
app.use("/api",saveActCal)
app.use("/api",saveFoodCal)
app.use('/api', listMenu)
app.use("/api",deletes)
app.use("/api",info)
app.use("/api",deletesact)
app.use("/api",deletesfood)
app.use("/api",returncalfood)
app.use("/api",caltoday)
app.use("/api",returncalact)
app.use("/api",listact)