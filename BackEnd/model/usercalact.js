const mongoose=require('mongoose')
const Schema = mongoose.Schema
const usercalact =new Schema({
   name:{
    type:String
   },nameact:{
    type:String
   },
   cal:{
    type:String
   },
   time:{
    type:String
   }
})
module.exports=mongoose.model("usercalact",usercalact)