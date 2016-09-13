'use strict';

export default class SignInCtrl {
    constructor($rootScope, $state, SignInService) {
        this.$rootScope = $rootScope;
        this.$state = $state;
        this.signInService = SignInService;
        this.user = {};

        /////

        this.createUser = this.createUser.bind(this);
    }

    createUser() {
        this.user = {
            username: this.username,
            password: this.password,
            email: this.email
        };

        this.signInService.postUser(this.user).then((res)=> {
            this.$rootScope.$emit('userCreated', res.data.success);
            this.$state.go('log.in');
        }, (err) => console.log(err))
    }
}

SignInCtrl.$inject = ['$rootScope', '$state', 'SignInService'];