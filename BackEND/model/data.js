const mongoose=require('mongoose')
const dbUrl ='mongodb://localhost:27017/DB'

mongoose.connect(dbUrl,{
    useNewUrlParser:true
}
    )
const db = mongoose.connection
const Schema = mongoose.Schema

const dbSchema =new Schema({
    id:{
        type:Schema.ObjectId
    },username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const DATABASE = module.exports=mongoose.model("Database",dbSchema)