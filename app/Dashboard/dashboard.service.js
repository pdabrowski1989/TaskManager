'use strict';

export default class DashboardService {
    constructor($http) {
        this.$http = $http;

        /////

        this.getTasksData = this.getTasksData.bind(this);
        this.getUsersData = this.getUsersData.bind(this);
    }

    getTasksData() {
        return this.$http.get('/api/tasks')
    }

    getUsersData() {
        return this.$http.get('/api/users')
    }
}

DashboardService.$inject = ['$http'];
