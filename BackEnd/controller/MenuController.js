const food = require("../model/food.json")

exports.listmenu = (req,res)=>{
    return res.json(food)
}