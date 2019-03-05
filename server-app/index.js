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
    connection.connect(function (err, d) {
        let data = {}
        data = req.body;
        console.log(data);
        connection.query('INSERT INTO `users` SET ?', data, function (error, results, fields) {
            if (error) {
                console.log(error.sql)
            }
            res.end('ok');

        })
        fs.appendFile('file.txt', JSON.stringify(data), function (err) {
            if (err) throw err;
            res.json('Updated!');
        });

    });
});


app.post('/Recipes', function (req, res) {
    connection.connect(function (err, d) {
        let data = {
            instraction: req.body.insraction,
            name: req.body.name
        }
        console.log(data);
        connection.query('INSERT INTO `recipes` SET ?', data, function (error, results, fields) {
            if (error) {
                console.log(error.sql)
            }
            res.json('ok');

        })
    });


});

app.listen(PORT);