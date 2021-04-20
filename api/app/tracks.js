const express = require('express');
const Track = require('../models/Track');
const Album = require('../models/Album');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const criteria = {};

		if (req.query.album) {
			criteria.album = req.query.album;
		}

		const tracks = await Track.find(criteria).sort({}).populate('album', 'title artist');
		res.send(tracks);
	} catch (e) {
		res.sendStatus(500);
	}
});

router.post('/', async (req, res) => {
	try {
		const trackData = req.body;
		const track = new Track(trackData);

		await track.save();
		res.send(track);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const tracks = Track.findOne({album: req.params.id}).populate('album', 'title');

		if (tracks) {
			res.send(tracks);
		} else {
			res.sendStatus(400);
		}
	} catch (e) {
		res.sendStatus(500);
	}
});

module.exports = router;