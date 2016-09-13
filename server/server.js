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

let User = require('./models/user');
let Task = require('./models/task');

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
let routes = require('./routes');

router.post('/authenticate', (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) console.log(err);
        // Type: 0 = No user found;
        if (!user) res.json({success: false, type: 0});
        else if (user) {
            // Type: 1 = Wrong password;
            if (user.password != req.body.password) res.json({success: false, type: 1});
            else {
                let token = jwt.sign(user, app.get('secretToken'), {
                    expiresInMinutes: 60
                });

                // Type: 2 = Success logged;
                res.json({
                    success: true,
                    type: 2,
                    token: token
                })
            }
        }
    })
});

router.get('/users', (req, res) => {
    User.find((err, users) => {
        if (err) res.send(err);
        res.json(users);
    });
});

router.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }, (err, user) => {
        if (err) console.log(err);
        User.find((err, users) => {
            if (err) res.send(err);
            res.json({
                success: true
            });
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