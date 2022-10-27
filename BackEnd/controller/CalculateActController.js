 const met = require("../model/Activity.json")
 const jwt = require('jsonwebtoken');
 const Activity = require("../model/Activity.json")
 exports.calAct = (req,res)=>{
     const mets = req.body.mets
     const minute = parseInt(req.body.minutes)
     const mass = parseInt(req.body.weight)
     const nameact = req.body.nameact
     console.log(Activity[nameact][mets]);

    if (!mass) {
        return res.json({"result":"Couldn't find weight"})  
    } else {
    var result = (((Activity[nameact][mets])*3.5*mass)/200)*minute
    console.log(result);
    res.status(200).json({result:result})
    }
 }