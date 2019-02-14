const mongoose = require('mongoose');

const offerSchema = mongoose.Schema({
    offerName: {
        require: true,
        type: String
    },
    message: {
        require: true,
        type: String
    }
});

module.exports.Offer = mongoose.model('Offer', offerSchema);