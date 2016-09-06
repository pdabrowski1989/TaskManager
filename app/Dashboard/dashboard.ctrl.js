'use strict';

export default class DashboardCtrl {
    constructor($http, $rootScope, DashboardService) {
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.getTasksData = DashboardService.getTasksData;
        this.tasks = [];
        this.alertType = '';
        this.alertDesc = '';
        this.showAlert = false;

        ////

        this.getTasks = this.getTasks.bind(this);
        this.$rootScope.$on('alert', (event, alert) => {
            this.showAlert = true;
            this.alertDesc = alert.desc;
            this.alertType = alert.type;
        })
    }

    $onInit() {
        this.getTasks();
    }

    getTasks() {
        this.getTasksData().then((res) => {
                this.tasks = res.data;
                console.log(res.data);
            },
            (err) => console.log(err))
    }
}

DashboardCtrl.$inject = ['$http', '$rootScope', 'DashboardService'];
