//CURD语句
var user = {
    replace:'replace into ??(id,title,price) values',
    queryItem:'select * from ?? order by lpad(id,10,0)',
    insert:'insert into ??(id,title,price) values', 
}

module.exports = user;