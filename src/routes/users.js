/**
 * Created by rohit on 7/9/16.
 */
var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.get("/", function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.send("404");
        } else {
            res.send(users);
        }
    });
});

router.post("/", function (req, res) {
    var usr = {
        name: {
            first_name: "Somi",
            last_name: "Buddy"
        },
        occupation: "Jobless",
        dob: "10/20/1993"
    };
    var newUser = User(usr);
    newUser.save(function (err) {
        if(err){
            res.send(err);
        }else{
            res.send(usr);
        }
    });
});
module.exports = router;

// app.get('/form.htm', function (req, res) {
//     res.send(
//         "<html>"+
//         "<body>"+
//         '<form action="process_get" method="GET">'+
//         'First Name: <input type="text" name="first_name">  <br>'+
//         'Last Name: <input type="text" name="last_name">'+
//         '<input type="submit" value="Submit">'+
//         '</form></body></html>'
//     );
// });
//
// app.get("/bkg", function (req, res) {
//     res.send('<img src="/bkg.jpg" />');
// });
// //
// // app.get('/process_get', function (req, res) {
// //
// //     // Prepare output in JSON format
// //     response = {
// //         first_name:req.query.first_name,
// //         last_name:req.query.last_name
// //     };
// //     console.log(response);
// //     res.end(JSON.stringify(response));
// // });