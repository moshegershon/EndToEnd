const express = require('express');
const app = express();
const http = require('http').Server(app);


const cors = require('cors');
const mysql = require('mysql');
const PORT = 8888;
const fs = require('fs');
const io = require('socket.io')(http);
const rl = require('readline');




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
    //     connection.connect(function (err, d) {
    //         

    //         }
    //         console.log(data);
    //         connection.query('INSERT INTO `recipes` SET ?', data, function (error, results, fields) {
    //             if (error) {
    //                 console.log(error.sql)
    //             }
    //             res.json('ok');

    //         });
    //     });
    // });
    //         app.get('/Recipes', function (req, res) {
    //             connection.connect(function (err, d) {
    //                 connection.query('SELECT * FROM `recipes`', function (error, results, fields) {
    //                     if (error) {
    //                         console.log(error.sql)
    //                     }
    //                     console.log(results);
    //                     res.send(results)
    //                 });
    //             });


});

io.on('connection', function (socket) {
    socket.on('message', function (msg) {
        let data = {
            instraction: msg.insraction,
            name: msg.name
        }
        console.log(data);
        connection.query('INSERT INTO `recipes` SET ?', data, function (error, results, fields) {
            console.log(11)
            if (error) {
                console.log(error);
            }
            
            connection.query('SELECT * FROM `recipes`', function (error, results, fields) {
                // results = [];
                if (error) {
                    console.log(error);
                };
                socket.emit('message', results);
                console.log(results);
                console.log(11);
            });

        });
        socket.emit('message', msg);
    });



    // socket.on('disconnect', function () {
    //     console.log('user disconnected');
    // });
});
http.listen(PORT, function() {
    console.log('connected')
});