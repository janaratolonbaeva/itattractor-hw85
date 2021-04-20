const express = require('express');
const TrackHistory = require('../models/TrackHistory');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
	const token = req.get('Authorization');

	if (!token) {
		return res.status(401).send({error: 'No present token or track!'});
	}

	const userData = await User.findOne({token});

	if (!userData) {
		return res.status(401).send({error: 'Wrong token!'});
	}

	const user = userData._id;
	const trackHistory = new TrackHistory();
	trackHistory.track = req.body.track;
	trackHistory.user  = user;
	trackHistory.datetime = new Date().toISOString();
	await trackHistory.save();

	return res.send({message: 'Correct token', trackHistory});
});

module.exports = router;