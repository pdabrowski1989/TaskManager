var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
    id: Number,
    date: String,
    done: Number,
    status: Number,
    taskName: String,
    description: String,
    comments: Array,
    assign: String
});

var Task = mongoose.model('Task', taskSchema);
module.exports = Task;