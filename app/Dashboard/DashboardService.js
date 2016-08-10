'use strict';

export default class DashboardService {
    constructor($http) {
        this.$http = $http;
    }

    getTasksData() {
        return this.$http.get('api/tasks')
    }

    createTaskData(task) {
        return this.$http.post('api/tasks' + task)
    }

}

DashboardService.$inject = ['$http'];
