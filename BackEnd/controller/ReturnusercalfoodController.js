const usercalfood = require("../model/usercalfood")

exports.returncalfood = (req,res)=>{
     const name = req.body.name
    usercalfood.find({name:name}).then(result=>{
        return res.json(result)
    })
}