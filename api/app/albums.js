const express = require('express');
const path = require('path');
const multer = require('multer');
const {nanoid} = require('nanoid');
const Album = require('../models/Album');
const config = require('../config');

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

		if (req.query.artist) {
			criteria.artist = req.query.artist;
		}

		const albums = await Album.find(criteria).sort({yearIssue: 1}).populate('artist', 'name');
		res.send(albums);
	} catch (e) {
		res.sendStatus(500);
	}
});

router.post('/', upload.single('image'), async (req, res) => {
	try {
		const albumData = req.body;

		if (req.file) {
			albumData.image = req.file.filename;
		}

		const album = new Album(albumData);
		await album.save();
		res.send(album);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const album = await Album.findOne({_id: req.params.id}).populate('artist', 'name info photo');

		if (album) {
			res.send(album);
		} else {
			res.sendStatus(400);
		}
	} catch (e) {
		res.sendStatus(500);
	}
});

module.exports = router;