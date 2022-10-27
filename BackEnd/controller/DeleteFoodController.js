const usercalfood = require("../model/usercalfood")

exports.deletesfood = (req,res)=>{
   const time = req.body.time
   const name = req.body.name
    if(!time){
        return res.status(400)
    }else{
        usercalfood.findOneAndDelete({name:name},{time:time}).then(result=>{
            return res.json({"result":'ลบอาหารสำเร็จ'})
        })
    }
    console.log(req)
}