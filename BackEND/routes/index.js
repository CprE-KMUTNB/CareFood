var express = require('express');
const data = require('../model/data');
var router = express.Router();
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
router.post('/register', function(req, res, next) {
  userdb = new data({
    Email:req.body.email,
    Password:req.body.password
    Realname:req.body.realname
    Surname:req.body.surname
    Gender:req.body.gender
    Age:req.body.age
    Height:req.body.height
    Weight:req.body.weight
  })
  data.createDB(userdb,function(err){
    if(err) console.log(err);
    res.redirect("/")
  });
});

module.exports = router;

