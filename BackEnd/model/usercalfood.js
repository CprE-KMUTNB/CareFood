
const mongoose=require('mongoose')
const Schema = mongoose.Schema
const usercalfood =new Schema({
    name:{
        type:String
    },foodname:{
        type:String
    },cal:{
        type:String
    }
    ,time:{
        type:String
    }
})
module.exports=mongoose.model("usercalfood",usercalfood)