const moment = require("moment")
const usercalfood = require("../model/usercalfood")
const useractcal = require("../model/usercalact")

exports.caltoday =async (req,res)=>{
    const name = req.body.name
    var answer = 0
    var act = 0
    var resultf = 0
     var foodcal = await usercalfood.find({name:name,date:moment().format('DD MM YYYY')})
        for (let i = 0;i<foodcal.length;i = i+1)
        {
             answer = answer + parseFloat(foodcal[i].cal)
        }
        
     var actcal = await useractcal.find({name:name,date:moment().format('DD MM YYYY')})
          for (let j = 0;j<actcal.length;j = j+1)
          {
               act = act + parseFloat(actcal[j].cal)
          }
     console.log(answer);
     console.log(act);
     resultf = answer - act
     return res.json({result:resultf})
}