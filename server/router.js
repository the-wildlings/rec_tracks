const router = require('express').Router();
const controller = require('./controller');

router
.route('/beats')
.get(controller.get)

module.exports = router;