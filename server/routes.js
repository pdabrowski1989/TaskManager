'use strict';

let express = require('express');
let jwt = require('jsonwebtoken');
let app = express();
let router = express.Router();

//== Models
let User = require('./models/user');
let Task = require('./models/task');


router.post('/authenticate', (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if(err) console.log(err);
        // Type: 0 = No user found;
        if(!user) res.json({success: false, type: 0});
        else if(user) {
            // Type: 1 = Wrong password;
            if(user.password != req.body.password) res.json({success: false, type: 1});
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