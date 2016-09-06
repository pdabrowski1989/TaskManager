'use strict';

export default function SignInConfig($stateProvider) {
    $stateProvider
        .state('signIn', {
            url: '/signIn',
            controller: 'SignInCtrl',
            controllerAs: 'sCtrl',
            templateUrl: '../app/SignIn/signin.html'
        });
}