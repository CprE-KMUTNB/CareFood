const usercalAct = require("../model/usercalact")

exports.returncalact = (req,res)=>{
     const name = req.body.name
    usercalAct.find({name:name}).then(result=>{
        return res.json(result)
    })
}