'use strict';

export default function LogInConfig($stateProvider) {
    $stateProvider
        .state('logIn', {
            url: '/logIn',
            controller: 'LogInCtrl',
            controllerAs: 'lCtrl',
            templateUrl: '../app/LogIn/login.html'
        })
}