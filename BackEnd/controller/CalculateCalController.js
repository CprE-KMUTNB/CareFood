const foodcal = require("../model/foodcal.json")

exports.calCal = (req,res)=>{
    const IngredientArray = req.body.ing
    const PortionArray = parseint(req.body.por)
    const result = 0
    for (let i =0 ;i<FoodArray.length;i = i+1){
        result = result + parseint(foodcal.IngredientArray[i])*PortionArray[i]
    }
    return res.status(200).json({result:result})
}