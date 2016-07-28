(function () {
    'use strict';

    angular
        .module('TaskManager')
        .config(SignInConfig);

    function SignInConfig ($stateProvider) {
        $stateProvider
            .state('signIn', {
                url: '/signIn',
                controller: 'SignInCtrl',
                controllerAs: 'sCtrl',
                templateUrl: '../app/SignIn/signin.html'
            })
    }
})();