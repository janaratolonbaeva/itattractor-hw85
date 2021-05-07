const express = require('express');
const TrackHistory = require('../models/TrackHistory');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const criteria = {};

		if (req.query.user) {
			criteria.user = req.query.user;
		}

		const tracks = await TrackHistory.find(criteria).populate('track', 'title').populate('album', 'title').populate('artist', 'name');
		res.send(tracks);
	} catch (e) {
		res.sendStatus(500);
	}
});

router.post('/', async (req, res) => {
	const token = req.get('Authorization');

	if (!token) {
		return res.status(401).send({error: 'No present token or the track!'});
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

router.get('/:id', async (req, res) => {
	try {
		const track = await TrackHistory.findOne({_id: req.params.id}).populate('track', 'title youtubeId');

		if (track) {
			res.send(track);
		} else {
			res.sendStatus(400);
		}
	} catch (e) {
		res.sendStatus(500);
	}
});


module.exports = router;