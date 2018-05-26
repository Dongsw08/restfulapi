var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('util');
var $sql = require('./userSqlMapping');

var pool = mysql.createPool(Object.assign({},$conf.mysql));

var jsonWrite = function (res,ret){
    if(typeof ret == 'undefined'){
        res.json({
            code:'1',
            msg:'操作失败'
        })
    }else{
        res.json(ret);
    }
}

module.exports = {
    add:function (req,res,next){
        pool.getConnection(function(err,connection){
            var item = req.params.item;
            var post = req.body;

            connection.query($sql.insert+mysql.escape(post),item,function(err,result){
                if(result){
                    jsonWrite(res,result);
                    connection.release();
                }
            })
        })
    },

    delete:function(req,res,next){
        pool.getConnection(function(err,connection){
            var id = req.query.id;

            connection.query($sql.delete,id,function(err,result){
                if(result){
                    jsonWrite(res,result);
                    connection.release();
                }
            })
        })
    },

    update:function(req,res,next){
        pool.getConnection(function(err,connection){
            var item = req.params.item;
            var post = req.body;

            connection.query($sql.replace+mysql.escape(post),item,function(err,result){
                if(result){
                    jsonWrite(res,result);
                    connection.release();
                }
            })
        })
    },

    queryItem:function(req,res,next){
        pool.getConnection(function(err,connection){
            var item = req.params.item;
            //console.log(id);
            //console.log(req.params.name);
            //console.log(mysql.escapeId(item));
            connection.query($sql.queryItem , item,function(err,result){
                if(err){
                    console.log(err);
                }
                
                if(result){
                    jsonWrite(res,result);
                    connection.release();
                }
            })
        })
    }
}

/* 测试用

fetch('http://localhost:3000/api/update/movie',{
    body:JSON.stringify([['mov7','某某',50],['mov8','默默',90],['mov9','复仇者联盟',100]]),
    cache:'no-cache',
    headers:{
        'content-type':'application/json'
    },
    method:'post',
}).then(res=>res.json()).then(json=>console.log(json)).catch(err=>console.log(err));

*/