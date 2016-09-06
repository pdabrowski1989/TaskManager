'use strict';

export default class LogInCtrl {
    constructor($http, $rootScope, LogInService) {
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.getUserData = LogInService.getUserData;
    }
}

LogInCtrl.$inject = ['$http', '$rootScope', 'LogInService'];