'use strict';

export default class LogInCtrl {
    constructor($http, $rootScope, LogInService) {
        this.$http = $http;
        this.getUserData = LogInService.getUserData;
    }

    getUser() {
        return this.getUserData(this.username).then((response) => {
            if(typeof response.data.username !== 'undefined' && this.password === response.data.password) {
                $rootScope.$emit('isLoged')
            }

            console.log(response.data.password, response.data.username);
        });
    }

}

LogInCtrl.$inject = ['$http', '$rootScope', 'LogInService'];