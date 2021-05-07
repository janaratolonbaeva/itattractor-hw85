const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	artist: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Artist',
		required: true
	},
	yearIssue: {
		type: Number,
		required: true
	},
	image: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	published: {
		type: Boolean,
		default: false
	}
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;