var express = require('express');
const data = require('../model/data');
var router = express.Router();
const{check,validationResult} = require("express-validator");
var bcrypt = require("bcryptjs");

var passport=require("passport")
var localStrategy=require("passport-local").Strategy

/* GET home page. */
router.get('/',enSureAuthenticate, function(req, res, next) {
  data.getAllData(function(err,alldata){
    if(err) throw err
  res.render('index', { title: 'Express' ,alldata:alldata});
  });
});

function enSureAuthenticate(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect("/login");
  }
}
// router.post('/', function(req, res, next) {
//       userdb = new data({
//         username:req.body.name,
//         password:req.body.password
//       })
//       data.createDB(userdb,function(err){
//         if(err) console.log(err);
//         res.redirect("/")
//       });
// });
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
router.get("/login",function(req,res,next){
  res.render("login");
});
router.post("/login",passport.authenticate("local",{
  failureRedirect:"/login",
  failureFlash:false
}),function(req,res,next){
  res.redirect("/");
});

passport.serializeUser(function(db,done){
  done(null,db.id)
});

passport.deserializeUser(function(id,done){
  DATABASE.getUserById(id,function(err,user){
    done(err,user);
  });
});

passport.use(new localStrategy(function(username,password,done){
  DATABASE.getUserByName(username,function(err,user){
    if(err) throw error
    if(!user){
      // ไม่พบผู้ใช้ในระบบ
      return done(null,false)
    }else{
      return done(null,user)
    }
  });
  DATABASE.comparePassword(password,user.password,function(err,user,isMatch){
    if(err) throw error
    console.log(isMatch)
    if(isMatch){
      return done(bull,user)
    }else{
      return done(null,false)
    }
  });
}));


module.exports = router;

