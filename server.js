const MongoClient = require("mongoose")
const uri ="mongodb://localhost:27017"
connect();
async function connect () {
    MongoClient.connect(uri,{
        useNewUrlParser:true,
    useUnifiedTopology:false
    }).then (()=>{console.log("Connect Laew")}).catch ((er)=>{console.log(er)})
}