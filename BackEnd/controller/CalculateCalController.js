const foodcal = require("../model/foodcal.json")
exports.calCal = (req,res)=>{
    const IngredientArray = req.body.ing
    const PortionArray = req.body.por
    if (IngredientArray== null && PortionArray == null){
      return res.json({result:"กรุณากรอกข้อมูล"})
    }else{
    var result = 0

     for (let i =0 ;i<IngredientArray.length;i = i+1){
       
         result = result + parseInt(foodcal[IngredientArray[i]])*parseInt(PortionArray[i])/100
       
      }
       return res.status(200).json({result:result})
    }
}
