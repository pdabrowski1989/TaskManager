'use strict';

class DashboardCtrl {
    constructor($http) {
        let dCtrl = this;
        dCtrl.a = a;

        dCtrl.user = {};

        $http.get('/api/users').then(function (res) {
           dCtrl.users = res.data;
           console.log(dCtrl.users)
        });

        function a() {
            dCtrl.user = {
                username: dCtrl.username,
                password: dCtrl.password
            };

            $http.post('/api/users', dCtrl.user).then(function (res) {
                dCtrl.users = res.data;
                console.log(dCtrl.users);
            })
        }
    }
}

angular
    .module('TaskManager')
    .controller('DashboardCtrl', DashboardCtrl);

