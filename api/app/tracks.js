const express = require('express');
const {nanoid} = require('nanoid');
const path = require('path');
const multer = require('multer');
const config = require('../config');
const Track = require('../models/Track');
const User = require("../models/User");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, config.uploadPath);
	},
	filename: (req, file, cb) => {
		cb(null, nanoid() + path.extname(file.originalname));
	}
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const criteria = {};

		if (req.query.album) {
			criteria.album = req.query.album;
		}

		const tracks = await Track.find(criteria).sort({number: 1}).populate('album', 'title artist');
		res.send(tracks);
	} catch (e) {
		res.sendStatus(500);
	}
});

router.post('/', upload.single('image'), async (req, res) => {
	console.log(req.body);
	try {
		const token = req.get('Authorization');

		if (!token) {
			return res.status(401).send({error: 'No present token or track!'});
		}

		const userData = await User.findOne({token});

		if (!userData) {
			return res.status(401).send({error: 'Wrong token!'});
		}

		const user = userData._id;

		const trackData = req.body;

		if (req.file) {
			trackData.image = req.file.filename;
		}

		const track = new Track(trackData);
		track.user = user;
		await track.save();
		res.send(track);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const track = await Track.findOne({_id: req.params.id}).populate('album', 'title');

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