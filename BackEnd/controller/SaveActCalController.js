
const usercalact = require('../model/usercalact')
const moment = require("moment")

exports.saveActCal = (req,res)=>{
    var name = req.body.name
    var nameact = req.body.nameact
    var cal = req.body.result
    var time = moment().format('h:mm:ss')
    var date = moment().format('DD MM YYYY')
    if(!req.body){
        return res.status(400)
    }else{
        usercalact.create({name,nameact,cal,time,date})
    }
    return res.json({result:"success"})
}