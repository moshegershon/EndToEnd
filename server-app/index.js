const express = require('express');
const cors = require('cors');
var mysql = require('mysql');
const PORT = 8888;
const fs = require('fs');
const rl = require('readline');
const app = express();



app.use(cors());
app.use(express.json())



var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'endtoend'
});




app.post('/contact', function (req, res) {
    connection.connect();
    let data = {}
     data = req.body;
    console.log(data);
    connection.query('INSERT INTO `users` SET ?', data, function (error, results, fields) {
        if (error){
            console.log(error.sql)
        }
        res.end('ok');

        })
        fs.appendFile('file.txt', JSON.stringify(data), function (err) {
            if (err) throw err;
            console.log('Updated!');
          });
    });
app.listen(PORT);