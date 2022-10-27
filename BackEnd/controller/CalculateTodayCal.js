const moment = require("moment")
const usercalfood = require("../model/usercalfood")

exports.caltoday = (req,res)=>{
    const name = req.body.name
    var answer = 0
     usercalfood.find({name:name,date:moment().format('DD MM YYYY')}).then(result=>{
        for (let i = 0;i<result.length;i = i+1)
        {
            
            answer = answer + result[i].cal
        }
        return res.json({result:answer})
     })
    
}