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