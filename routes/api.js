var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao.js');

router.get('/',function(req,res,next){
    res.render('index',{ title:'api' });
})

router.get('/get/:item',function (req, res, next) {    //查询页面全部数据
    //console.log(req.params.item);
    userDao.queryItem(req,res,next);
});

router.post('/add/:item',function(req,res,next){     //添加项目
    userDao.add(req,res,next);
});

router.post('/update/:item',function(req,res,next){
    userDao.update(req,res,next);
})

module.exports = router;