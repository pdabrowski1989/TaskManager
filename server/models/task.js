var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    id: String,
    description: String,
    date: new Date,
    assign: String
});

var Task = mongoose.model('User', taskSchema);
module.exports = Task;