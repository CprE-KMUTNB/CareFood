const userinfodb = require('../model/userinfo')
var bcrypt = require("bcryptjs");
const { sign } = require('jsonwebtoken');

exports.login=(req,res)=>{
    var {name,password} = req.body
    userinfodb.findOne({name}).then(userinfo=>{
        if (!userinfo){
            return res.json({error:"ไม่พบชื่อนี้ในระบบ"})
        }else{
            bcrypt.compare(password,userinfo.password).then(result=>{
                if(!result){
                    return res.json({error:"รหัสผ่านไม่ถูกต้อง"})
                }else{
                 const token = sign({userid:userinfo._id},process.env.TOKENSECRET)
                 return res.status(200).json({token:token,userinfo})
                }
            })
        }
    })
}
