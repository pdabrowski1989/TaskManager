var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');
var Task = require('./models/task');
var app = express();
var router = express.Router();
var db = mongoose.connection;
var port = 8080;
var path = require('path');
var projectPath = path.join(__dirname, '../');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//========== Connect to db.
mongoose.connect('mongodb://localhost/test888');
/*mongoose.connect('mongodb://mo1008_taskM:9Mzc64EfBzs5diwSBR5a@85.194.242.107:27017/mo1008_taskM');*/
db.on('error', function () {
    console.log('Connection Error.')
});
db.once('open', function () {
    console.log('Connection Success.')
});

//========== Index View
app.get('/', function (req, res) {
    res.sendFile(projectPath + 'www/index.html')
});

//========== Static Files
app.use('/app', express.static(projectPath + 'app'));
app.use('/libs', express.static(projectPath + 'www/libs'));
app.use('/js', express.static(projectPath + 'www/js'));
app.use('/css', express.static(projectPath + 'www/css'));

//========== Routes
router.get('/users', function (req, res) {
    User.find(function (err, users) {
        if (err) res.send(err);
        res.json(users);
    });
});

router.get('/users/:username', (req, res) => {
    User.findOne({username: req.params.username}, function (err, user) {
        if (err) res.send(err);
        res.json(user);
    });
});

router.post('/users', function (req, res) {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }, function (err, user) {
        if (err) console.log(err);

        User.find(function (err, users) {
            if (err) res.send(err);
            res.json(users);
        })
    })
});

router.post('/tasks', (req, res) => {
    Task.create({
        id: req.body.id,
        date: req.body.date,
        done: req.body.done,
        status: req.body.status,
        taskName: req.body.taskName,
        description: req.body.description,
        comments: req.body.comments,
        assign: req.body.assign
    }, (err, task) => {
        if (err) console.log(err);

        Task.find(function (err, tasks) {
            if (err) res.send(err);
            res.json(tasks);
        })
    })
});

router.get('/tasks', (req, res) => {
    Task.find((err, tasks) => {
        if (err) res.send(err);
        res.json(tasks);
    });
});

//========== Init
app.use('/api', router);
app.listen(port);
console.log('Listening on port: ' + port + '.');