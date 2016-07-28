'use strict';

angular.module('TaskManager', ['ui.router']);
'use strict';

class DashboardCtrl {
    constructor($http) {
        let dCtrl = this;
        dCtrl.a = a;

        dCtrl.user = {};

        $http.get('/api/users').then(function (res) {
            dCtrl.users = res.data;
            console.log(dCtrl.users);
        });

        function a() {
            dCtrl.user = {
                username: dCtrl.username,
                password: dCtrl.password
            };

            $http.post('/api/users', dCtrl.user).then(function (res) {
                dCtrl.users = res.data;
                console.log(dCtrl.users);
            });
        }
    }
}

angular.module('TaskManager').controller('DashboardCtrl', DashboardCtrl);
(function () {
    'use strict';

    angular.module('TaskManager').config(DashboardConfig);

    function DashboardConfig($stateProvider, $urlRouterProvider) {

        if (true) {
            $urlRouterProvider.otherwise('/logIn');
        } else {
            $urlRouterProvider.otherwise('/dashboard');
        }

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            controller: 'DashboardCtrl',
            controllerAs: 'dCtrl',
            templateUrl: '../app/Dashboard/dashboard.html'
        });
    }
})();
/**
 * Created by p.dabrowski5 on 2016-07-28.
 */
/**
 * Created by p.dabrowski5 on 2016-07-28.
 */
/**
 * Created by p.dabrowski5 on 2016-07-28.
 */
'use strict';

class LogInCtrl {
    constructor() {}
}

angular.module('TaskManager').controller('LogInCtrl', LogInCtrl);
'use strict';

class LogInService {
    constructor() {}
}

angular.module('TaskManager').service('LogInService', LogInService);
(function () {
    'use strict';

    angular.module('TaskManager').config(LogInConfig);

    function LogInConfig($stateProvider) {
        $stateProvider.state('logIn', {
            url: '/logIn',
            controller: 'LogInCtrl',
            controllerAs: 'lCtrl',
            templateUrl: '../app/LogIn/login.html'
        });
    }
})();