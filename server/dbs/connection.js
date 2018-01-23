/**
 * Created by lmy on 17-12-11.
 */
/*数据库链接文件*/
const mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: "",
        database: '',//数据库名称
        port: 3306
    });
connection.connect((err)=> {
    if (err) {
        console.log('err' + err.stack);
        return;
    }
    console.log('connected success!!!');
});
module.exports = connection;