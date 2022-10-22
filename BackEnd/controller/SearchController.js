 const food = require("../model/food.json")

 exports.search = (req,res)=>{
     const {foodname} = req.body
     food.find({foodname:{$regex:foodname}}).then(food=>{
         if(!food[0]){
             return res.status(200).json({result:"not found"})
         }else{
             return res.status(200).json(food)
         }
     })
 }