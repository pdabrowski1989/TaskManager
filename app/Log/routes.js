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
            template: '<sign-in-component></sign-in-component>'
        });
 }

LogInConfig.$inject = ['$stateProvider'];