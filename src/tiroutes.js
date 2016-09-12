var express = require('express');
var router = express.Router();

// Import all routes
var userRoutes = require('./routes/users');
var heroRoutes = require('./routes/heroes');

// Assign resource locators to routes
router.use("/users", userRoutes);
router.use("/heroes", heroRoutes);


module.exports = router;