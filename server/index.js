const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router')
const port = 3069;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use('/api', router);

app.listen(port, () => console.log(`Connected to port: ${port}`));