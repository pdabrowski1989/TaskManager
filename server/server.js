var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
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
router.post('/token', ()=> {

});

router.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) res.send(err);
        res.json(users);
    });
});

router.get('/users/:username', (req, res) => {
    User.findOne({username: req.params.username}, (err, user) => {
        if (err) res.send(err);
        if (!user) {
            res.json({message: "log in failed (Wrong username)"})
        } else if (user) {
            if (user.password != req.body.password) {
                res.json({message: "log in failed (Wrong password)"})
            } else {

            }
        }
    });
});

router.post('/users', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }, (err, user) => {
        if (err) console.log(err);

        User.find((err, users) => {
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

        Task.find((err, tasks) => {
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