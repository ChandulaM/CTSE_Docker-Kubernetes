const express = require('express');
const { sendMessage } = require('../service/smsService');
const router = express.Router();

router.post('/sendsms', sendMessage);

router.get('/', function(req, res) {
    res.status(200).json({ msg: "Message service is up & running" })
})

module.exports = router;