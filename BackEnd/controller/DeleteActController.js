const usercalact = require("../model/usercalact")


exports.deletesact = (req,res)=>{
   const time = req.body.time
   const name = req.body.name
    if(!time){
        return res.status(400)
    }else{
        usercalact.findOneAndDelete({name:name},{time:time}).then(result=>{
            return res.json({"result":'ลบกิจกรรมสำเร็จ'})
        })
    }
    console.log(req)
}