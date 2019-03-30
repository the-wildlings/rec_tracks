const BeatPorts = require('../database');

const controller = {
  get: (req, res) => {
    BeatPorts.find()
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err));
  }
}

module.exports = controller;