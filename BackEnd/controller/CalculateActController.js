 const met = require("../model/Activity.json")
 const userinfodb = require("../model/userinfo")
 const jwt = require('jsonwebtoken');

 exports.calAct = (req,res)=>{
     const Token = req.body.userToken
     const userid = jwt.decode(Token)
     const nameact = req.body.mets
     const minute = parseint(req.body.minutes)
     const mass = parseint(userinfodb.findById(userid,{weights}))
    
     const result = (((met[nameact])*3.5*mass)/200)*minute

     res.status(200).json({result:result})
 }