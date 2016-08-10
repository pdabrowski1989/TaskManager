'use strict';

export default class DashboardCtrl {
    constructor($http, DashboardService) {
        this.$http = $http;
        this.getTasksData =  DashboardService.getTasksData;
    }

    getTasks() {
        return this.getTasksData.then((response) => response.data);
    }
}

DashboardCtrl.$inject = ['$http', 'DashboardService'];
