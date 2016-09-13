'use strict';

export default class LogInService {
    constructor($http) {
        this.$http = $http;
    }

    postUser(user){
        return this.$http.post('api/authenticate', user)
    }

}

LogInService.$inject = ['$http'];

