const beatPorts = require('./');
const mongoose = require('mongoose');

let data = [
  {
    id: 1,
    title: 'Rivera',
    version: 'Original Mix',
    artist: 'Kartell',
    album_name: 'Riviera',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2012-05-21',
    key: 'A min',
    bpm: 122,
    length: 327,
    price: 1.49
  },
  {
    id: 2,
    title: 'Last Call',
    version: 'Original Mix',
    artist: 'Kartell',
    album_name: 'Sapphire',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-01-06',
    key: 'D min',
    bpm: 130,
    length: 176,
    price: 1.49
  },
  {
    id: 3,
    title: 'Espoir',
    version: 'Original Mix',
    artist: 'Darius',
    album_name: 'Sapphire',
    genre: 'Indie Dance / Nu Disco',
    label: 'Roche Musique',
    released: '2014-02-24',
    key: 'E♭ min',
    bpm: 143,
    length: 242,
    price: 1.49
  },
]

const seedData = () => {
  beatPorts.insertMany(data)
  .then(() => {
    console.log('Seeded database')
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
}

seedData();