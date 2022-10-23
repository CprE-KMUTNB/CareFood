const userinfo = require('../model/userinfo');
var bcrypt = require("bcryptjs");

exports.register=(req,res)=>{
    var {name,password,realname,surname,age,height,weight,gender} = req.body
    switch(true){
      case !name:{
        return res.status(400).json({error:"Please enter your name"})
      }
      case !password:{
        return res.status(400).json({error:"Please enter your password"})
      }
    }
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        password = hash;
        userinfo.create({name,password,realname,surname,age,height,weight,gender},(err)=>{
          if(err){
            return res.status(400).json({error:"Name ซ้ำ!"})
          }
          return res.status(200).json({success:"สำเร็จ!"})
        })
      });
    });
 }
