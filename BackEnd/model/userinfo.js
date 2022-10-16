const mongoose=require('mongoose')
const Schema = mongoose.Schema
const userSchema =new Schema({
    id:{
        type:Schema.ObjectId
    },name:{
        type:String,
        unique:true,
        require:true
    },password:{
        type:String,
        require:true
    },gender:{
        type:String
    },age:{
        type:String
    },height:{
        type:String
    },weight:{
        type:String
    }
})
module.exports=mongoose.model("userinfo",userSchema)


