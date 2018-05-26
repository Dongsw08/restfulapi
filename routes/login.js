var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/',function (req,res,next) {
  try {
    if(req.body.username && req.body.password){
        var username = req.body.username;
        var password = req.body.password;
        if(username == 'admin' && password == 'admin'){
            var token = jwt.sign({'username':username,'password':password},'this is secret');
            res.json(token);
        }
    } 
  } catch (error) {
   throw error;   
  }
})

module.exports = router;