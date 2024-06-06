const mysql =require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'movis',
    password:'2222'
})

module.exports=pool.promise();