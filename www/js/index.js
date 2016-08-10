/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(8);
	__webpack_require__(4);
	__webpack_require__(11);
	__webpack_require__(3);
	__webpack_require__(10);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(5);
	__webpack_require__(2);
	module.exports = __webpack_require__(12);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Configs
	
	var _routes = __webpack_require__(2);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _routes3 = __webpack_require__(3);
	
	var _routes4 = _interopRequireDefault(_routes3);
	
	var _DashboardService = __webpack_require__(4);
	
	var _DashboardService2 = _interopRequireDefault(_DashboardService);
	
	var _LogInService = __webpack_require__(5);
	
	var _LogInService2 = _interopRequireDefault(_LogInService);
	
	var _SignInService = __webpack_require__(6);
	
	var _SignInService2 = _interopRequireDefault(_SignInService);
	
	var _MainCtrl = __webpack_require__(7);
	
	var _MainCtrl2 = _interopRequireDefault(_MainCtrl);
	
	var _DashboardCtrl = __webpack_require__(8);
	
	var _DashboardCtrl2 = _interopRequireDefault(_DashboardCtrl);
	
	var _LogInCtrl = __webpack_require__(9);
	
	var _LogInCtrl2 = _interopRequireDefault(_LogInCtrl);
	
	var _SignInCtrl = __webpack_require__(10);
	
	var _SignInCtrl2 = _interopRequireDefault(_SignInCtrl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Controllers
	angular.module('TaskManager', ['ui.router']).config(_routes2.default).config(_routes4.default).service('DashboardService', _DashboardService2.default).service('SignInService', _SignInService2.default).service('LogInService', _LogInService2.default).controller('MainCtrl', _MainCtrl2.default).controller('DashboardCtrl', _DashboardCtrl2.default).controller('LogInCtrl', _LogInCtrl2.default).controller('SignInCtrl', _SignInCtrl2.default);
	
	// Services

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = LogInConfig;
	function LogInConfig($stateProvider) {
	    $stateProvider.state('logIn', {
	        url: '/logIn',
	        controller: 'LogInCtrl',
	        controllerAs: 'lCtrl',
	        templateUrl: '../app/LogIn/login.html'
	    });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = SignInConfig;
	function SignInConfig($stateProvider) {
	    $stateProvider.state('signIn', {
	        url: '/signIn',
	        controller: 'SignInCtrl',
	        controllerAs: 'sCtrl',
	        templateUrl: '../app/SignIn/signin.html'
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DashboardService = function () {
	    function DashboardService($http) {
	        _classCallCheck(this, DashboardService);
	
	        this.$http = $http;
	    }
	
	    _createClass(DashboardService, [{
	        key: 'getTasksData',
	        value: function getTasksData() {
	            return this.$http.get('api/tasks');
	        }
	    }, {
	        key: 'createTaskData',
	        value: function createTaskData(task) {
	            return this.$http.post('api/tasks' + task);
	        }
	    }]);
	
	    return DashboardService;
	}();
	
	exports.default = DashboardService;
	
	
	DashboardService.$inject = ['$http'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogInService = function () {
	    function LogInService($http) {
	        _classCallCheck(this, LogInService);
	
	        this.$http = $http;
	    }
	
	    _createClass(LogInService, [{
	        key: 'getUserData',
	        value: function getUserData(user) {
	            return this.$http.get('api/users/' + user);
	        }
	    }]);
	
	    return LogInService;
	}();
	
	exports.default = LogInService;
	
	
	LogInService.$inject = ['$http'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SignInService = function SignInService($http, $q, $rootScope) {
	    _classCallCheck(this, SignInService);
	
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
	                    console.log(res.data);
	                });
	            }
	        });
	    }
	};
	
	exports.default = SignInService;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainCtrl = function () {
	    function MainCtrl($rootScope, $state) {
	        _classCallCheck(this, MainCtrl);
	
	        this.$rootScope = $rootScope;
	        this.$state = $state;
	
	        ///
	
	        this.$rootScope.$on('isLoged', this.isLogedd());
	    }
	
	    _createClass(MainCtrl, [{
	        key: 'isLogedd',
	        value: function isLogedd() {
	            return this.$state.go('dashboard');
	        }
	    }]);
	
	    return MainCtrl;
	}();
	
	exports.default = MainCtrl;
	
	
	MainCtrl.$inject = ['$rootScope', '$state'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DashboardCtrl = function () {
	    function DashboardCtrl($http, DashboardService) {
	        _classCallCheck(this, DashboardCtrl);
	
	        this.$http = $http;
	        this.getTasksData = DashboardService.getTasksData;
	    }
	
	    _createClass(DashboardCtrl, [{
	        key: 'getTasks',
	        value: function getTasks() {
	            return this.getTasksData.then(function (response) {
	                return response.data;
	            });
	        }
	    }]);
	
	    return DashboardCtrl;
	}();
	
	exports.default = DashboardCtrl;
	
	
	DashboardCtrl.$inject = ['$http', 'DashboardService'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogInCtrl = function () {
	    function LogInCtrl($http, $rootScope, LogInService) {
	        _classCallCheck(this, LogInCtrl);
	
	        this.$http = $http;
	        this.$rootScope = $rootScope;
	        this.getUserData = LogInService.getUserData;
	    }
	
	    _createClass(LogInCtrl, [{
	        key: 'getUser',
	        value: function getUser() {
	            var _this = this;
	
	            return this.getUserData(this.username).then(function (response, err) {
	                if (response.data.username !== undefined && _this.password === response.data.password) {
	                    _this.$rootScope.$broadcast('isLoged');
	                } else if (err) {
	                    console.log('Wrong username;');
	                }
	
	                console.log(response.data.password, response.data.username);
	            });
	        }
	    }]);
	
	    return LogInCtrl;
	}();
	
	exports.default = LogInCtrl;
	
	
	LogInCtrl.$inject = ['$http', '$rootScope', 'LogInService'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
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
	
	exports.default = SignInCtrl;

/***/ },
/* 11 */
/***/ function(module, exports) {

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
	        }).state('dashboard.createTask', {
	            url: '/createtask',
	            controller: 'CreateTaskCtrl',
	            controllerAs: 'ctCtrl',
	            templateUrl: '../app/Dashboard/createTask/createTask.html'
	        });
	    }
	})();

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CreateTaskCtrl = function CreateTaskCtrl($http) {
	    _classCallCheck(this, CreateTaskCtrl);
	
	    this.$http = $http;
	};
	
	exports.default = CreateTaskCtrl;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map