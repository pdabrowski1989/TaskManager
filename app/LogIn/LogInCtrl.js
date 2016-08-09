'use strict';

export default class LogInCtrl {
    constructor(LogInService, $http) {
        this.$http = $http;
        this.getUserData = LogInService.getUserData;
    }

    getUser() {
        return this.getUserData(this.username).then((response) => {
            if(typeof response.data.username !== 'undefined' && this.password === response.data.password) {

            }

            console.log(response.data.password, response.data.username);
        });
    }

}

LogInCtrl.$inject = ['LogInService', '$http'];