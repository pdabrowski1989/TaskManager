'use strict';

class SignInService {
    constructor($http, $q, $rootScope) {
        var sService = this;
        var deferred = $q.defer();
        sService.createUser = createUser;
        sService.checkIfUsernameIsTaken = checkIfUsernameIsTaken;
        sService.isTaken = false;

        //////

        function checkIfUsernameIsTaken(username) {
            $http.get('/api/users/' + username).then(function (res) {
                if (res.data) {
                    $rootScope.$apply(function () {
                        sService.isTaken = true;
                    });
                } else {
                    sService.isTaken = false;
                }

               deferred.resolve(sService.isTaken);
            });

            return deferred.promise;
        }

        function createUser(user) {
            sService.checkIfUsernameIsTaken(user.username).then(function () {
                console.log(sService.isTaken);

                if (sService.isTaken === false) {

                    $http.post('/api/users', user).then(function (res) {
                        console.log(res.data)
                    })
                }
            });
        }
    }
}

angular
    .module('TaskManager')
    .service('SignInService', SignInService);

