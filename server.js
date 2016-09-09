var mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    /*db = require('./src/model/db'),
    blob = require('./src/model/blobs'),
    routes = require('./sec/routes/index'),
    users = require('./src/routes/users');*/

mongoose.connect("mongodb://localhost/mean-ti");
var app = express();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));

// app.get("/", function (req, res) {
//     // res.send(mongoose.find();
// });
//
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

app.use(express.static('static'));

var server = app.listen(8080, function(){
    console.log("Server running at :"+server.address().port);
});