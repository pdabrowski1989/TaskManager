'use strict';


export default function DashboardConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            template: '<dashboard-component></dashboard-component>'
        })

        .state('dashboard.createTask', {
            url: '/createtask',
            template: '<create-task-component></create-task-component>'
        })
}