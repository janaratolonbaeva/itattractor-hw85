const mongoose = require('mongoose');
const moment = require('moment');

const TrackHistorySchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	track: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Track',
		required: true
	},
	datetime: {
		type: String,
		required: true
	}
});

const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);

module.exports = TrackHistory;