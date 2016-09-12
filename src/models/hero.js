/**
 * Created by rohit on 12/9/16.
 */
var mongoose = require('mongoose');
var heroSchema = new mongoose.Schema({
    name: String,
    strength: String,
    is_flying: { type:Boolean, default: false }
});
var Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;