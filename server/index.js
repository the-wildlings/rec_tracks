const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./router')
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use('/api', router);

app.listen(port, () => console.log(`Connected to port: ${port}`));