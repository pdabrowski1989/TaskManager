'use strict';

export default class CreateTaskCtrl {
    constructor($http, $rootScope, $state, DashboardService, CreateTaskService) {
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.getUsersData = DashboardService.getUsersData;
        this.postAddTask = CreateTaskService.postAddTask;
        this.users = [];
        this.userAssigned = null;
        this.taskName = '';
        this.taskDsc = '';
        this.alert = '';
        this.task = [];

        ////

        this.addTask = this.addTask.bind(this);
        this.getUsers = this.getUsers.bind(this)
    }

    $onInit() {
        this.getUsers();
    }

    getUsers() {
        this.getUsersData().then((response)=> {
            this.users = response.data;
        }, (err)=> console.log(err));
    }

    addTask() {
        this.task = {
            id: 1,
            date: new Date,
            done: 0,
            status: 0,
            taskName: this.taskName.toString(),
            description: this.taskDsc,
            comments: [],
            assign: this.userAssigned
        };

        this.postAddTask(this.task).then((response) => {
            this.alert = {
                desc: 'New task added',
                type: 'success'
            }
        }, (err) => {
            this.alert = {
                desc: err,
                type: 'danger'
            }
        }).then(() => {
            this.$state.go('dashboard');
            this.$rootScope.$broadcast('alert', this.alert);
        });
    }
}

CreateTaskCtrl.$inject = ['$http', '$rootScope', '$state', 'DashboardService', 'CreateTaskService'];