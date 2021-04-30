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
  };

  const [artist1, artist2, artist3] = await Artist.create({
    name: 'Graig David',
    photo: 'fixtures/artist-1.jpeg',
    info: 'Craig Ashley David MBE (born 5 May 1981) is a British singer, songwriter, rapper, DJ and record producer.'
  }, {
    name: 'Celine Dion',
    photo: 'fixtures/artist-2.jpeg',
    info: 'Celine Marie Claudette Dion is a Canadian singer.'
  }, {
    name: 'Cher',
    photo: 'fixtures/artist-3.jpeg',
    info: 'Cher  is an American singer, actress and television personality.'
  });

  const [album1, album2, album3] = await Album.create({
    title: 'Believe',
    artist: artist3,
    yearIssue: '1998',
    image: 'fixtures/album-1.jpeg'
  }, {
    title: 'Born to Do It',
    artist: artist1,
    yearIssue: '2000',
    image: 'fixtures/album-2.jpeg'
  }, {
    title: 'Let\'s Talk About Love',
    artist: artist2,
    yearIssue: '1997',
    image: 'fixtures/album-3.jpeg'
  });

  const [track1, track2, track3] = await Track.create({
    title: 'My Heart Will Go On',
    album: album3,
    duration: '2.2',
    number: 1,
    image: 'fixtures/track-2.jpeg',
    youtubeId: 'https://youtu.be/3gK_2XdjOdY'
  }, {
    title: 'Walking Away',
    album: album2,
    duration: '1.8',
    number: 2,
    image: 'fixtures/track-1.jpeg',
    youtubeId: 'https://youtu.be/Dbb7xeZGR-U'
  }, {
    title: 'Believe',
    album: album1,
    duration: '2.4',
    number: 3,
    image: 'fixtures/track-3.jpeg',
    youtubeId: 'https://youtu.be/nZXRV4MezEw'
  });

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
  });
};

run().catch(console.error)