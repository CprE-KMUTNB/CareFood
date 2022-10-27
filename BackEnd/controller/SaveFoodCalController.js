const usercalfood = require("../model/usercalfood")
const moment = require("moment")

exports.saveFoodCal = (req,res)=>{
    var foodname = req.body.foodname
    var name = req.body.name
    var cal = req.body.result
    var time = moment().format('DD MM YYYY h:mm:ss')
    if(!req.body){
        return res.status(400)
    }else{
        usercalfood.create({
           name,foodname,cal,time
        })
        }
        return res.json({result:"success"})
        }
    
