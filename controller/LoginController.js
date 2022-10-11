const userinfodb = require('../model/userinfo')
var bcrypt = require("bcryptjs");
const { sign } = require('jsonwebtoken');

exports.login=(req,res)=>{
    var {name,password} = req.body
    userinfodb.findOne({name}).then(userinfo=>{
        if (!userinfo){
            return res.status(400).json({error:"This name doesn't exist"})
        }else{
            bcrypt.compare(password,userinfo.password).then(result=>{
                if(!result){
                    return res.status(400).json({error:"This password doesn't match"})
                }else{
                 const token = sign({userid:userinfo._id},process.env.TOKENSECRET)
                 return res.status(200).json({token})
                }
            })
        }
    })
}