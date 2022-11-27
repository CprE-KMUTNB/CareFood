const usercalfood = require("../model/usercalfood")
const moment = require("moment")

exports.saveFoodCal = (req,res)=>{
    var foodname = req.body.foodname
    var name = req.body.name
    var cal = req.body.result
    var time = moment().format('h:mm:ss')
    var date = moment().format('DD MM YYYY')
    if(!req.body){
        return res.status(400)
    }else{
        usercalfood.create({
           name,foodname,cal,time,date
        })
        }
        return res.json({result:"บันทึกสำเร็จ"})
        }
    
