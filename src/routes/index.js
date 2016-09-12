var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {    //unused argument "next" removed from args list
    res.sendFile("../index.html");
});

module.exports = router;