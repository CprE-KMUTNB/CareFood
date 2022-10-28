const act = require("../model/activitylist.json")

exports.listact = (req,res)=>{
    return res.json(act)
}