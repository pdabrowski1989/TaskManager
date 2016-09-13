'use strict';

export default class SignInService {
    constructor($http) {
        this.$http = $http;

        //////

        this.postUser = this.postUser.bind(this);
    }

    postUser(user) {
        return this.$http.post('api/user', user);
    }
}

SignInService.$inject = ['$http'];