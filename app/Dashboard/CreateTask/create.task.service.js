'use strict';

export default class CreateTaskService {
    constructor($http) {
        this.$http = $http;
        this.postAddTask =  this.postAddTask.bind(this)
    }

    postAddTask(task) {
       return this.$http.post('/api/tasks', task)
    }
}
