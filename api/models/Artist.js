const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	photo: String,
	info: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	published: {
		type: Boolean,
		default: false
	}
});

const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;