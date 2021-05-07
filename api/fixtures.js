const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');

const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Track = require('./models/Track');
const TrackHistory = require('./models/TrackHistory');
const User = require('./models/User');

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [user, admin] = await User.create({
    username: 'user',
    password: 'user',
    token: nanoid(),
    role: 'user'
  }, {
    username: 'admin',
    password: 'admin',
    token: nanoid(),
    role: 'admin'
  });

  const [artist1, artist2, artist3] = await Artist.create({
    name: 'Graig David',
    photo: 'fixtures/artist-1.jpeg',
    info: 'Craig Ashley David MBE (born 5 May 1981) is a British singer, songwriter, rapper, DJ and record producer.',
    user: user,
  }, {
    name: 'Celine Dion',
    photo: 'fixtures/artist-2.jpeg',
    info: 'Celine Marie Claudette Dion is a Canadian singer.',
    user: admin
  }, {
    name: 'Cher',
    photo: 'fixtures/artist-3.jpeg',
    info: 'Cher  is an American singer, actress and television personality.',
    user: user
  });

  const [album1, album2, album3, album4, album5, album6] = await Album.create({
    title: 'Believe',
    artist: artist3,
    yearIssue: '1998',
    image: 'fixtures/album-1.jpeg',
    user: user
  }, {
    title: 'Born to Do It',
    artist: artist1,
    yearIssue: '2000',
    image: 'fixtures/album-2.jpeg',
    user: user
  }, {
    title: 'Let\'s Talk About Love',
    artist: artist2,
    yearIssue: '1997',
    image: 'fixtures/album-3.jpeg',
    user: admin
  }, {
    title: 'Slicker Than Your Average',
    artist: artist1,
    yearIssue: '2002',
    image: 'fixtures/album-4.png',
    user: admin
  }, {
    title: 'One Heart',
    artist: artist2,
    yearIssue: '2003',
    image: 'fixtures/album-7.jpeg',
    user: admin
  }, {
    title: 'Living Proof',
    artist: artist3,
    yearIssue: '2001',
    image: 'fixtures/album-8.jpeg',
    user: user
  }, );

  const [track1, track2, track3, track4, track5, track6, track7, track8, track9, track10, track11, track12] = await Track.create({
    title: 'My Heart Will Go On',
    album: album3,
    duration: '2.2',
    number: 1,
    image: 'fixtures/track-2.jpeg',
    youtubeId: 'https://www.youtube.com/embed/3gK_2XdjOdY',
    user: admin
  }, {
    title: 'Walking Away',
    album: album2,
    duration: '1.8',
    number: 1,
    image: 'fixtures/track-1.jpeg',
    youtubeId: 'https://www.youtube.com/embed/Dbb7xeZGR-U',
    user: user
  }, {
    title: 'Believe',
    album: album1,
    duration: '2.4',
    number: 1,
    image: 'fixtures/track-3.jpeg',
    youtubeId: 'https://www.youtube.com/embed/nZXRV4MezEw',
    user: user
  }, {
    title: 'You Don\'t Miss Your Water',
    album: album4,
    duration: '5.20',
    number: 1,
    image: 'fixtures/track-6.jpeg',
    youtubeId: 'https://www.youtube.com/embed/183aYqvHCTs',
    user: admin
  }, {
    title: 'Rise & Fall',
    album: album4,
    duration: '4.47',
    number: 2,
    image: 'fixtures/track-7.jpeg',
    youtubeId: 'https://www.youtube.com/embed/pU2ukeS2JTE',
    user: admin
  }, {
    title: '7 days',
    album: album2,
    duration: '3.55',
    number: 2,
    image: 'fixtures/track-9.jpeg',
    youtubeId: 'https://www.youtube.com/embed/P5lmb5-tnM0',
    user: admin
  }, {
    title: 'All The Way',
    album: album5,
    duration: '3.56',
    number: 1,
    image: 'fixtures/track-16.jpeg',
    youtubeId: 'https://www.youtube.com/embed/mlMWBccgirg',
    user: admin
  }, {
    title: 'Don\'t Love You No More (I\'m Sorry)',
    album: album5,
    duration: '4.04',
    number: 2,
    image: 'fixtures/track-17.jpeg',
    youtubeId: 'https://www.youtube.com/embed/OfQnNHGN69E',
    user: user
  }, {
    title: 'The Reason',
    album: album3,
    duration: '5.01',
    number: 2,
    image: 'fixtures/track-23.jpeg',
    youtubeId: 'https://www.youtube.com/embed/AWKg_Q1WC2E',
    user: admin
  }, {
    title: 'I\'m Alive',
    album: album6,
    duration: '3.28',
    number: 1,
    image: 'fixtures/track-29.jpeg',
    youtubeId: 'https://www.youtube.com/embed/NJsa6-y4sDs',
    user: user
  }, {
    title: 'Have You Ever Been In Love',
    album: album6,
    duration: '4.07',
    number: 2,
    image: 'fixtures/track-30.jpeg',
    youtubeId: 'https://www.youtube.com/embed/WP1kBoj2DUs',
    user: user
  }, {
    title: 'Runaway',
    album: album1,
    duration: '4.46',
    number: 2,
    image: 'fixtures/track-41.jpeg',
    youtubeId: 'https://www.youtube.com/embed/D0_LZtV9WI4',
    user: user
  }, );

  await TrackHistory.create({
    user: user,
    track: track1,
    datetime: 'Thursday, April 28th 2021, 4:12:45 pm'
  }, {
    user: user,
    track: track2,
    datetime: 'Thursday, April 28th 2021, 4:18:34 pm'
  }, {
    user: admin,
    track: track3,
    datetime: 'Thursday, April 28th 2021, 4:26:02 pm'
  }, {
    user: admin,
    track: track4,
    datetime: 'Friday, April 29th 2021, 2:03:15 pm'
  }, {
    user: user,
    track: track5,
    datetime: 'Wednesday, April 27th 2021, 6:17:25 pm'
  }, {
    user: user,
    track: track6,
    datetime: 'Wednesday, April 27th 2021, 7:32:09 pm'
  }, {
    user: admin,
    track: track7,
    datetime: 'Wednesday, April 27th 2021, 9:42:54 pm'
  }, {
    user: admin,
    track: track8,
    datetime: 'Monday, May 3 2021, 2:23:15 pm'
  }, {
    user: user,
    track: track9,
    datetime: 'Monday, May 3 2021, 1:04:26 pm'
  }, {
    user: user,
    track: track10,
    datetime: 'Monday, May 3 2021, 4:18:34 pm'
  }, {
    user: admin,
    track: track11,
    datetime: 'Sunday, May 1 2021, 4:26:02 pm'
  }, {
    user: admin,
    track: track12,
    datetime: 'Friday, April 29th 2021, 4:03:15 pm'
  },);
};

run().catch(console.error)