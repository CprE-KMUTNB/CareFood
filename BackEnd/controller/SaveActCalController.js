
const usercalact = require('../model/usercalact')
const moment = require("moment")

exports.saveActCal = (req,res)=>{
    var name = req.body.name
    var nameact = req.body.nameact
    var cal = req.body.result
    var time = moment().format('DD MM YYYY h:mm:ss')
    if(!req.body){
        return res.status(400)
    }else{
        usercalact.create({name,nameact,cal,time})
    }
    return res.json({result:"success"})
}