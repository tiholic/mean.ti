var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: {
        first_name: String,
        last_name: String
    },
    occupation: String,
    dob: { type: Date, required: true },
    is_female: { type:Boolean, default: true }
});
var User = mongoose.model('User', userSchema);
module.exports = User;