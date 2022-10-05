var express = require('express');
const data = require('../model/data');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
      userdb = new data({
        username:req.body.name,
        password:req.body.password
      })
      data.createDB(userdb,function(err){
        if(err) console.log(err);
      });
});

module.exports = router;

