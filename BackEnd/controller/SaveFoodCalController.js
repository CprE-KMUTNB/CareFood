const userinfodb = require('../model/userinfo')

exports.saveActCal = (req,res)=>{
    const foodcal = req.body.result
    const Token = req.body.userToken
    const userid = jwt.decode(Token)
    if(!userid){
        return res.status(400)
    }else{
        userinfodb.findByIdAndUpdate(userid.userid,{
            $set:{
                usercalfood:foodcal
            }
        }).then(user=>{
            console.log(user)
            return res.status(200).json({success:"Save สำเร็จ"})
        })
    }
}