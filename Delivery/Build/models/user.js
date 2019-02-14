const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    location: {
        latitude: {
            type: Number,
            require: true
        },
        longitude: {
            type: Number,
            require: true
        }
    },
    phone_number: {
        require: true,
        type: Number
    },
    detection_time: {
        require: true,
        type: String
    }
});

const user = mongoose.model('User', userSchema);

module.exports.User = user;