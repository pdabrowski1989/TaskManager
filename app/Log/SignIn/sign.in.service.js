'use strict';

export default class SignInService {
    constructor($http) {
        this.$http = $http;

        //////

        this.postUser = this.postUser.bind(this);
    }

    postUser(user) {
        this.$http('api/user').post(user);
    }
}

SignInService.$inject = ['$http', '$q'];