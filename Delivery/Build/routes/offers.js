const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Offer} = require('../models/offer');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '9573db24', // should be stored in a Environment Variable and retrieved using config mapping in real application    
    apiSecret: 'HdeFYZQ0numNkdTV'}); // should be stored in a Environment Variable and retrieved using config mapping in real application
    
router.get('', async (req, res) => {
    const offers = await Offer.find();
    res.send(offers);
});

router.post('/new-offer', async (req, res) => {
    console.log(req.body);
    let offer = new Offer({
        offerName: req.body.offerName,
        message: req.body.message
    });
    offer = await offer.save();
    res.send(offer);
});

router.post('/send-offer', async (req, res) => {
    const to = '+917892234674'; // req.body.to.phone; hardcoded because it's free account
    const offerId = mongoose.Types.ObjectId(req.body.offer);
    const offer = await Offer.findOne(offerId);

    nexmo.message.sendSms('Test-Seller', to, offer.message, {type: 'unicode'},
    (err, responseData) => {
        if(err) {
            res.send(err);
        } else {
            res.send(responseData);
        }
    });
});

module.exports = router;