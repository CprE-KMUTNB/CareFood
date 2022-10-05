var express = require('express');
var router = express.Router();
const Data = require('../model/data')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next) {
      console.log(req.body.name);
      console.log(req.body.password);
});

module.exports = router;

