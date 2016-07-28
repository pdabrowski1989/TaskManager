(function () {
    'use strict';

    angular
        .module('TaskManager')
        .config(LogInConfig);

    function LogInConfig ($stateProvider) {
        $stateProvider
            .state('logIn', {
                url: '/logIn',
                controller: 'LogInCtrl',
                controllerAs: 'lCtrl',
                templateUrl: '../app/LogIn/login.html'
            })
    }
})();