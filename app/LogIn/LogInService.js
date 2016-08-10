'use strict';

export default class LogInService {
    constructor($http) {
        this.$http = $http;
    }

    getUserData(user){
        return this.$http.get('api/users/' + user);
    }

}

LogInService.$inject = ['$http'];

