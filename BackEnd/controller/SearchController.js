 const food = require("../model/food.json")

 exports.search = (req,res)=>{
     const {foodname} = req.body.foods
     food.find({foodname:{$regex:foodname}}).then(res=>{
         if(!food[0]){
             return res.status(200).json({result:"ไม่พบ"})
         }else{
             return res.status(200).json(res)
         }
     })
 }