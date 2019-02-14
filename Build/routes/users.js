const express = require('express');
const router = express.Router();
const {User} = require('../models/user');


/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.post('/new-user', async (req, res) => {
  let user = new User ({
    location: req.body.location,
    phone_number: req.body.phone_number,
    detection_time: req.body.detection_time
  });
  user = await user.save();
  res.send(user);
});

module.exports = router;
