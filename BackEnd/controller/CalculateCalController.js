const foodcal = require("../model/foodcal.json")

exports.calCal = (req,res)=>{
    const FoodArray = req.body
    const result = 0
    for (let i =0 ;i<FoodArray.length;i = i+1){
        result = result + parseint(foodcal.FoodArray[i])
    }
    return res.status(200).json({result:result})
}