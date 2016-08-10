'use strict';

export default class LogInCtrl {
    constructor($http, $rootScope, LogInService) {
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.getUserData = LogInService.getUserData;
    }

    getUser() {
        return this.getUserData(this.username).then((response, err) => {
            if(response.data.username !== undefined && this.password === response.data.password) {
                this.$rootScope.$broadcast('isLoged')
            } else if (err) {
                console.log('Wrong username;')
            }

            console.log(response.data.password, response.data.username);
        });
    }

}

LogInCtrl.$inject = ['$http', '$rootScope', 'LogInService'];