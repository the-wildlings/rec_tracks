var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnbeats', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(() => console.log('Connected to MongoDB'))
});

var bpSchema = new mongoose.Schema({
  id: {type: Number, unique: true, allowNull: false},
  title: {type: String, allowNull: false},
  version: {type: String, allowNull: false},
  artist: { type: String, allowNull: false },
  album: { type: String, allowNull: false },
  remixers: { type: String},
  genre: { type: String, allowNull: false },
  label: { type: String, allowNull: false },
  released: { type: String, allowNull: false },
  key: { type: String, allowNull: false },
  bpm: { type: Number, allowNull: false },
  length: { type: Number, allowNull: false },
  price: { type: Number, allowNull: false },  
  albumArt: { type: String, allowNull: false },
  waveform: { type: String, allowNull: false }
});

var BeatPorts = mongoose.model('BeatPorts', bpSchema);

module.exports = BeatPorts;