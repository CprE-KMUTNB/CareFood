const userinfo = require('../model/userinfo');
var bcrypt = require("bcryptjs");

exports.register=(req,res)=>{
    var {name,password,realname,surname,age,height,weight,gender} = req.body
    switch(true){
      case !name:{
        return res.json({error:"โปรดกรอกชื่อผู้ใช้"})
      }
      case !password:{
        return res.json({error:"โปรดกรอกรหัสผ่าน"})
      }
    }
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        password = hash;
        userinfo.create({name,password,realname,surname,age,height,weight,gender},(err)=>{
          if(err){
            return res.json({error:"มีชื่อผู้ใช้นี้แล้ว"})
          }
          return res.json({success:"สมัครสมาชิกสำเร็จ"})
        })
      });
    });
 }
