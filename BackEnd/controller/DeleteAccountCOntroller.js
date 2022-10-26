const userinfodb = require('../model/userinfo')
const jwt = require('jsonwebtoken');

exports.deletes = (req,res)=>{
    const Token = req.body.userToken
    const userid = jwt.decode(Token)
    if(!userid){
        return res.status(400)
    }else{
        userinfodb.findByIdAndDelete(userid.userid).then(result=>{
            return res.json({"result":'ลบบัญชีสำเร็จ'})
        })
    }
}