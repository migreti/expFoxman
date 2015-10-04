var express = require('express');
var router = express.Router();
var sendgrid  = require('sendgrid')('migreti', 'CsigaBiga68');
var toEmail = 'migreti@gmail.com';

var sendEmail = function (email, name, comment, onSuccess, onError) {
  sendgrid.send({
    to:       toEmail,
    from:     email,
    subject:  name,
    text:     comment
  }, function(err, json) {
    if (err) {
      console.log(err);
      onError(err);
    } else {
      console.log('E-mail sent!');
      onSuccess();
    }
  });
};


var sendReply = function (email, name) {
  sendgrid.send({
    to:       email,
    from:     toEmail,
    subject:  name,
    text:     'Thanks!'
  }, function(err, json) {
    if (err) {
      console.log(err);
    } else {
      console.log('E-mail sent!');
    }
  });
};



router.get('/', function(req, res, next) {


  sendEmail(
    req.query.email,
    req.query.name,
    req.query.comment,
    function() {
      sendReply(req.query.email, req.query.name);
      res.render('emailSent');
    },
    function(err){res.render('error');}
  );

});



module.exports = router;
