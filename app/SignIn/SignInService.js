'use strict';

class SignInService {
    constructor($http) {
        var sService = this;
        sService.createUser = createUser;
        sService.checkIfUsernameIsTaken = checkIfUsernameIsTaken;
        sService.isTaken = false;

        //////

        function checkIfUsernameIsTaken(username) {
            $http.get('/api/users/' + username).then(function (res) {
                if (res.data !== null) {
                    console.log('is taken')
                    return sService.isTaken = true;
                } else {
                    return sService.isTaken = false;
                }
            });
        }

        function createUser (user) {
            sService.checkIfUsernameIsTaken(user.username);

           if(sService.isTaken === false) {
               console.log(user)

               $http.post('/api/users', user).then(function (res) {
                  console.log(res.data)
               })
           }
        }
    }
}

angular
    .module('TaskManager')
    .service('SignInService', SignInService);

