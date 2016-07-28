'use strict';

class LogInService {
    constructor($http) {
        var lService = this;
        lService.checkIfUsernameIsTaken = checkIfUsernameIsTaken;

        //////

        function checkIfUsernameIsTaken(username) {
           console.log(username);
        }
    }
}

angular
    .module('TaskManager')
    .service('LogInService', LogInService);

