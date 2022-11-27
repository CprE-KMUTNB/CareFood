
 const Activity = require("../model/Activity.json")
 exports.calAct = (req,res)=>{
     const mets = req.body.mets
     const minute = parseInt(req.body.minutes)
     const mass = parseInt(req.body.weight)
     const nameact = req.body.nameact
    
    if (!mass) {
        return res.json({result:"Couldn't find weight"})  
    }else if(!minute){
        return res.json({result:"Please Type Minutes"})
    }
    else {
    var result = (((Activity[nameact][mets])*3.5*mass)/200)*minute
    res.status(200).json({result:result})
    }
 }

