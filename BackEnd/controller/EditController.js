const userinfodb = require('../model/userinfo')
const jwt = require('jsonwebtoken');

exports.edit = (req,res)=>{
    const Token = req.body.userToken
    const userid = jwt.decode(Token)
    if(!userid){
        return res.status(400)
    }else{
        userinfodb.findByIdAndUpdate(userid.userid,{
            $set:{
                realname:req.body.realname,
                surname:req.body.surname ,
                age:req.body.age,
                weight:req.body.weight,
                height:req.body.height,
            }
        }).then(user=>{
            console.log(user)
            return res.status(200).json(user)
        })
    }
    
}


