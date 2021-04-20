const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exitHook = require('async-exit-hook');
const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');
const users = require('./app/user');
const trackHistory = require('./app/track_history');

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/artists', artists);
app.use('/albums', albums);
app.use('/tracks', tracks);
app.use('/users', users);
app.use('/track_history', trackHistory);

const run = async () => {
	await mongoose.connect('mongodb://localhost/musicHomework', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});

	app.listen(port, () => {
		console.log(`Server started on ${port} port!`);
	});

	exitHook(async callback => {
		await mongoose.disconnect();
		console.log('mongoose disconnected');
		callback();
	});
};

run().catch(console.error);


