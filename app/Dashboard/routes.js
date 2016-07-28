(function () {
    'use strict';

    angular
        .module('TaskManager')
        .config(DashboardConfig);

    function DashboardConfig ($stateProvider, $urlRouterProvider) {

        if(true) {
            $urlRouterProvider.otherwise('/logIn');
        } else {
            $urlRouterProvider.otherwise('/dashboard');
        }

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                controller: 'DashboardCtrl',
                controllerAs: 'dCtrl',
                templateUrl: '../app/Dashboard/dashboard.html'
            })

    }
})();