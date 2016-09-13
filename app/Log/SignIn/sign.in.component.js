'use strict';

export const SignInComponent = {
    templateUrl: '../app/Log/SignIn/sign.in.template.html',
    controller: 'SignInCtrl',
    bindings: {
        username: '<',
        password: '<',
        email: '<'
    }
};
