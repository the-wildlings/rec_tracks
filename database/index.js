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
  version: {type: String, allowNul: false},
  artist: { type: String, allowNul: false },
  album_name: { type: String, allowNul: false },
  remixers: { type: String, allowNul: false },
  genre: { type: String, allowNul: false },
  label: { type: String, allowNul: false },
  released: { type: String, allowNul: false },
  key: { type: String, allowNul: false },
  bpm: { type: Number, allowNul: false },
  length: { type: Number, allowNul: false },
  price: { type: Number, allowNul: false },  
});

var BeatPorts = mongoose.model('BeatPorts', bpSchema);

module.exports = BeatPorts;