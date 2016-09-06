'use strict';

export default function DashboardConfig($stateProvider) {
    $stateProvider
        .state('home.dashboard', {
            url: '/dashboard',
            template: '<dashboard-component></dashboard-component>'
        })

        .state('home.createTask', {
            url: '/createtask',
            template: '<create-task-component taskname="$ctrl.taskName" taskdsc="$ctrl.taskdsc" user="$ctrl.model"></create-task-component>'
        })
}