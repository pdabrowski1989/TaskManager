'use strict';

export default function MainConfig($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            controller: 'MainCtrl',
            controllerAs: 'mCtrl',
            templateUrl: '../app/Main/home.template.html'
        });
}

MainConfig.$inject = ['$stateProvider'];