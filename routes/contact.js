var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')('migreti', 'CsigaBiga68');
var email = 'migreti@gmail.com';
var comment= 'kismajom';



router.get('/', function(req, res, next) {
  res.render('contact');


  
});


module.exports = router;
