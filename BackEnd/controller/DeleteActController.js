const usercalact = require("../model/usercalact")


exports.deletesact = (req,res)=>{
   const time = req.body.time
   const name = req.body.name
   const date = req.body.date
    if(!time){
        return res.status(400)
    }else{
        usercalact.findOneAndDelete({date:date,name:name,time:time}).exec((err,data)=>{
            return res.json({"result":"ลบกิจกรรมสำเร็จ"})
        })
    }
    console.log(req)
}