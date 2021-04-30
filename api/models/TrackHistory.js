const mongoose = require('mongoose');
const moment = require('moment');
const now = moment();

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
		default: now.format('dddd, MMMM Do YYYY, h:mm:ss a'),
		required: true
	}
});

const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);

module.exports = TrackHistory;