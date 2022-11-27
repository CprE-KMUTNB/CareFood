
 const Activity = require("../model/Activity.json")
 exports.calAct = (req,res)=>{
     const mets = req.body.mets
     const minute = parseInt(req.body.minutes)
     const mass = parseInt(req.body.weight)
     const nameact = req.body.nameact
    
    if (!mass) {
        return res.json({result:"ไม่พบข้อมูลน้ำหนักของผู้ใช้"})  
    }else if(!minute){
        return res.json({result:"กรุณาใส่เวลาที่ออกกำลังกาย"})
    }
    else {
    var result = (((Activity[nameact][mets])*3.5*mass)/200)*minute
    res.status(200).json({result:result})
    }
 }

