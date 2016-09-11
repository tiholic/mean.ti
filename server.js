var mongoose = require('mongoose');
var logger = require('morgan');

mongoose.connect("mongodb://localhost/mean-ti");
var db = mongoose.connection;
console.log("--------- database connection started -------------");
db.on("error", function(){console.log("**************cannot connect to database****************")});
db.on("open", function(){
    console.log("--------- db connection opened -------------");
    var path = require('path');
    var favicon = require('serve-favicon');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');            //parses information from POST
    var express = require('express');

    // routes import
    var routes = require('./src/routes/users');
    var index = require('./src/routes/index');
    var app = express();

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    var methodOverride = require('method-override');    //used to manipulate POST
    app.use(methodOverride(function(req, res){
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));
    app.use("/", index);
    app.use("/", routes);
    var server = app.listen(8080, function(){
        console.log("Server running at :"+server.address().port);
    });
});