const usercalfood = require("../model/usercalfood")

exports.deletesfood = (req,res)=>{
   const time = req.body.time
   const date = req.body.date
   const name = req.body.name
    if(!time){
        return res.status(400)
    }else{
        usercalfood.findOneAndDelete({date:date,name:name,time:time}).exec((err,data)=>{
         res.json({"result":'ลบอาหารสำเร็จ'})
        })
    }
    console.log(req)
}