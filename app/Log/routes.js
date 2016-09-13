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
            template: '<sign-in-component username="username" password="password" email="email"></sign-in-component>'
        });
 }

LogInConfig.$inject = ['$stateProvider'];