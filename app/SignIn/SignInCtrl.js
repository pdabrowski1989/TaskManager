'use strict';

class SignInCtrl {
    constructor(SignInService) {
        var sCtrl = this;
        sCtrl.createUser = createUser;
        /////

        function createUser() {
            sCtrl.user = {
                username: sCtrl.username,
                password: sCtrl.password,
                email: sCtrl.email
            };

            SignInService.createUser(sCtrl.user)
        }
    }
}

angular
    .module('TaskManager')
    .controller('SignInCtrl', SignInCtrl);

