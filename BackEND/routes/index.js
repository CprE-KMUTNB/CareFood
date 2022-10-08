var express = require('express');
const data = require('../model/data');
var router = express.Router();
const{check,validationResult} = require("express-validator");
var bcrypt = require("bcryptjs");
/* GET home page. */
router.get('/', function(req, res, next) {
  data.getAllData(function(err,alldata){
    if(err) throw err
  res.render('index', { title: 'Express' ,alldata:alldata});
  });
});
router.post('/', function(req, res, next) {
      userdb = new data({
        username:req.body.name,
        password:req.body.password
      })
      data.createDB(userdb,function(err){
        if(err) console.log(err);
        res.redirect("/")
      });
});
// Register
// router.post('/register',[
//   check("email","กรุณาป้อนอีเมล").isEmail(),
//   check("password","กรุณาป้อนพาสเวิร์ด").not().isEmpty(),
//   check("realname","กรุณาป้อนชื่อจริง").not().isEmpty(),
//   check("surname","กรุณาป้อนนามสกุล").not().isEmpty()
// ], function(req,res,next){
//   const result = validationResult(req);
//   var err=result.errors;
//   //validation data
//   if(!result.isEmpty()){
//     //Return error to views
//     res.render('register',{errors})
//   }},
// function(req, res, next) {
//   userdb = new data({
//     Email:req.body.email,
//     Password:req.body.password,
//     Realname:req.body.realname,
//     Surname:req.body.surname,
//     Gender:req.body.gender,
//     Age:req.body.age,
//     Height:req.body.height,
//     Weight:req.body.weight
//   })
//   data.createDB(userdb,function(err){
//     if(err) console.log(err);
//     res.redirect("/")
//   });
// });
router.post("/register",[
    check("email","กรุณาป้อนอีเมล").isEmail(),
    check("password","กรุณาป้อนพาสเวิร์ด").not().isEmpty(),
    check("realname","กรุณาป้อนชื่อจริง").not().isEmpty(),
    check("surname","กรุณาป้อนนามสกุล").not().isEmpty()
],function(req,res,next){
  const result = validationResult(req);
  var errors = result.errors;
  if(!result.isEmpty()){
    res.render("register",{errors:errors
    })
  }else{
    userdb = new data({
           Email:req.body.email,
           Password:req.body.password,
           Realname:req.body.realname,
           Surname:req.body.surname,
           Gender:req.body.gender,
           Age:req.body.age,
           Height:req.body.height,
           Weight:req.body.weight
         })
         data.createDB(userdb,function(err){
          if(err) console.log(err);
          res.redirect("/")
         })
  }
});


module.exports = router;

