'use strict';

angular.module('TaskManager', ['ui.router']);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashboardCtrl = function DashboardCtrl($http) {
    _classCallCheck(this, DashboardCtrl);

    var dCtrl = this;
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
};

angular.module('TaskManager').controller('DashboardCtrl', DashboardCtrl);
'use strict';

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
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogInCtrl = function LogInCtrl(LogInService) {
    _classCallCheck(this, LogInCtrl);

    var lCtrl = this;
    lCtrl.displayAlert = true;
    lCtrl.alertType = {};
};

angular.module('TaskManager').controller('LogInCtrl', LogInCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogInService = function LogInService($http) {
    _classCallCheck(this, LogInService);

    var lService = this;
};

angular.module('TaskManager').service('LogInService', LogInService);
'use strict';

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
'use strict';

(function () {
    'use strict';

    angular.module('TaskManager').config(SignInConfig);

    function SignInConfig($stateProvider) {
        $stateProvider.state('signIn', {
            url: '/signIn',
            controller: 'SignInCtrl',
            controllerAs: 'sCtrl',
            templateUrl: '../app/SignIn/signin.html'
        });
    }
})();
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInCtrl = function SignInCtrl(SignInService) {
    _classCallCheck(this, SignInCtrl);

    var sCtrl = this;
    sCtrl.createUser = createUser;
    /////

    function createUser() {
        sCtrl.user = {
            username: sCtrl.username,
            password: sCtrl.password,
            email: sCtrl.email
        };

        SignInService.createUser(sCtrl.user);
    }
};

angular.module('TaskManager').controller('SignInCtrl', SignInCtrl);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignInService = function SignInService($http) {
    _classCallCheck(this, SignInService);

    var sService = this;
    sService.createUser = createUser;
    sService.checkIfUsernameIsTaken = checkIfUsernameIsTaken;
    sService.isTaken = false;

    //////

    function checkIfUsernameIsTaken(username) {
        $http.get('/api/users/' + username).then(function (res) {
            if (res.data !== null) {
                console.log('is taken');
                return sService.isTaken = true;
            } else {
                return sService.isTaken = false;
            }
        });
    }

    function createUser(user) {
        sService.checkIfUsernameIsTaken(user.username);

        if (sService.isTaken === false) {
            console.log(user);

            $http.post('/api/users', user).then(function (res) {
                console.log(res.data);
            });
        }
    }
};

angular.module('TaskManager').service('SignInService', SignInService);