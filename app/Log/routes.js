'use strict';

export default function LogInConfig($stateProvider) {
    $stateProvider
        .state('log', {
            url: '/log',
            template: '<log-component></log-component>'
        })
        .state('log.in', {
            url: '/in',
            template: '<in-component></in-component>'
        })
        .state('log.signin', {
            url: '/signin',
            template: '<sign-in-component username="$ctrl.username" password="$ctrl.password" email="$ctrl.email"></sign-in-component>'
        });
 }

LogInConfig.$inject = ['$stateProvider'];