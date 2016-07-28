'use strict';

class SignInService {
    constructor($http) {
        var sService = this;
        sService.createUser = createUser;
        sService.checkIfUsernameIsTaken = checkIfUsernameIsTaken;

        //////

        function checkIfUsernameIsTaken(username) {
            $http.get('/api/users/' + username).then(function (res) {
                console.log(res.data);
               return res.data;
            });
        }

        function createUser (user) {
            console.log(user);

            sService.checkIfUsernameIsTaken(user.username);

            $http.post('/api/users', user).then(function (res) {
                return res.data;
            })
        }
    }
}

angular
    .module('TaskManager')
    .service('SignInService', SignInService);

