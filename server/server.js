'use strict';

let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();
let db = mongoose.connection;
let port = 8080;
let path = require('path');
let projectPath = path.join(__dirname, '../');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//========== Connect to db.
mongoose.connect('mongodb://localhost/test1_4');
/*mongoose.connect('mongodb://mo1008_taskM:9Mzc64EfBzs5diwSBR5a@85.194.242.107:27017/mo1008_taskM');*/
db.on('error', () => {
    console.log('Connection Error.')
});
db.once('open',() => {
    console.log('Connection Success.')
});

//========== Index View
app.get('/', (req, res) => {
    res.sendFile(projectPath + 'www/index.html')
});

//========== Static Files
app.use('/app', express.static(projectPath + 'app'));
app.use('/libs', express.static(projectPath + 'www/libs'));
app.use('/js', express.static(projectPath + 'www/js'));
app.use('/css', express.static(projectPath + 'www/css'));
app.use('/img', express.static(projectPath + 'www/img'));
app.use('/fonts', express.static(projectPath + 'www/fonts'));

//========== Routes
require('./routes');

//========== Init
app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port + '.');