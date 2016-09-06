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
	__webpack_require__(15);
	__webpack_require__(10);
	__webpack_require__(5);
	__webpack_require__(4);
	__webpack_require__(12);
	__webpack_require__(7);
	__webpack_require__(2);
	__webpack_require__(9);
	__webpack_require__(17);
	__webpack_require__(14);
	__webpack_require__(3);
	__webpack_require__(13);
	__webpack_require__(8);
	__webpack_require__(16);
	__webpack_require__(11);
	module.exports = __webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Configs
	
	var _routes = __webpack_require__(2);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _routes3 = __webpack_require__(3);
	
	var _routes4 = _interopRequireDefault(_routes3);
	
	var _routes5 = __webpack_require__(4);
	
	var _routes6 = _interopRequireDefault(_routes5);
	
	var _dashboard = __webpack_require__(5);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _createTask = __webpack_require__(6);
	
	var _createTask2 = _interopRequireDefault(_createTask);
	
	var _LogInService = __webpack_require__(7);
	
	var _LogInService2 = _interopRequireDefault(_LogInService);
	
	var _SignInService = __webpack_require__(8);
	
	var _SignInService2 = _interopRequireDefault(_SignInService);
	
	var _MainCtrl = __webpack_require__(9);
	
	var _MainCtrl2 = _interopRequireDefault(_MainCtrl);
	
	var _dashboard3 = __webpack_require__(10);
	
	var _dashboard4 = _interopRequireDefault(_dashboard3);
	
	var _createTask3 = __webpack_require__(11);
	
	var _createTask4 = _interopRequireDefault(_createTask3);
	
	var _LogInCtrl = __webpack_require__(12);
	
	var _LogInCtrl2 = _interopRequireDefault(_LogInCtrl);
	
	var _SignInCtrl = __webpack_require__(13);
	
	var _SignInCtrl2 = _interopRequireDefault(_SignInCtrl);
	
	var _sidebar = __webpack_require__(14);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _dashboard5 = __webpack_require__(15);
	
	var _createTask5 = __webpack_require__(16);
	
	var _sidebar3 = __webpack_require__(17);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('TaskManager', ['ui.router']).config(_routes2.default).config(_routes4.default).config(_routes6.default).service('DashboardService', _dashboard2.default).service('SignInService', _SignInService2.default).service('LogInService', _LogInService2.default).service('CreateTaskService', _createTask2.default).controller('MainCtrl', _MainCtrl2.default).controller('DashboardCtrl', _dashboard4.default).controller('CreateTaskCtrl', _createTask4.default).controller('LogInCtrl', _LogInCtrl2.default).controller('SignInCtrl', _SignInCtrl2.default).controller('SidebarCtrl', _sidebar2.default).component('createTaskComponent', _createTask5.CreateTaskComponent).component('dashboardComponent', _dashboard5.DashboardComponent).component('sidebarComponent', _sidebar3.SidebarComponent);
	
	// Components
	
	
	// Controllers
	
	
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
	
	LogInConfig.$inject = ['$stateProvider'];

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
	exports.default = DashboardConfig;
	function DashboardConfig($stateProvider) {
	    $stateProvider.state('dashboard', {
	        url: '/dashboard',
	        template: '<dashboard-component></dashboard-component>'
	    }).state('dashboard.createTask', {
	        url: '/createtask',
	        template: '<create-task-component></create-task-component>'
	    });
	}

/***/ },
/* 5 */
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
	
	        /////
	
	        this.getTasksData = this.getTasksData.bind(this);
	        this.getUsersData = this.getUsersData.bind(this);
	    }
	
	    _createClass(DashboardService, [{
	        key: 'getTasksData',
	        value: function getTasksData() {
	            return this.$http.get('/api/tasks');
	        }
	    }, {
	        key: 'getUsersData',
	        value: function getUsersData() {
	            return this.$http.get('/api/users');
	        }
	    }]);
	
	    return DashboardService;
	}();
	
	exports.default = DashboardService;
	
	
	DashboardService.$inject = ['$http'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CreateTaskService = function () {
	    function CreateTaskService($http) {
	        _classCallCheck(this, CreateTaskService);
	
	        this.$http = $http;
	        this.postAddTask = this.postAddTask.bind(this);
	    }
	
	    _createClass(CreateTaskService, [{
	        key: 'postAddTask',
	        value: function postAddTask(task) {
	            return this.$http.post('/api/tasks', task);
	        }
	    }]);
	
	    return CreateTaskService;
	}();
	
	exports.default = CreateTaskService;

/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainCtrl = function MainCtrl($rootScope, $state) {
	    _classCallCheck(this, MainCtrl);
	
	    this._$rootScope = $rootScope;
	    this._$state = $state;
	    this._$rootScope.isLoged = false;
	};
	
	exports.default = MainCtrl;
	
	
	MainCtrl.$inject = ['$rootScope', '$state'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DashboardCtrl = function () {
	    function DashboardCtrl($http, $rootScope, DashboardService) {
	        var _this = this;
	
	        _classCallCheck(this, DashboardCtrl);
	
	        this.$http = $http;
	        this.$rootScope = $rootScope;
	        this.getTasksData = DashboardService.getTasksData;
	        this.tasks = [];
	        this.alertType = '';
	        this.alertDesc = '';
	        this.showAlert = false;
	
	        ////
	
	        this.getTasks = this.getTasks.bind(this);
	        this.$rootScope.$on('alert', function (event, alert) {
	            _this.showAlert = true;
	            _this.alertDesc = alert.desc;
	            _this.alertType = alert.type;
	        });
	    }
	
	    _createClass(DashboardCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.getTasks();
	        }
	    }, {
	        key: 'getTasks',
	        value: function getTasks() {
	            var _this2 = this;
	
	            this.getTasksData().then(function (res) {
	                _this2.tasks = res.data;
	                console.log(res.data);
	            }, function (err) {
	                return console.log(err);
	            });
	        }
	    }]);
	
	    return DashboardCtrl;
	}();
	
	exports.default = DashboardCtrl;
	
	
	DashboardCtrl.$inject = ['$http', '$rootScope', 'DashboardService'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CreateTaskCtrl = function () {
	    function CreateTaskCtrl($http, $rootScope, $state, DashboardService, CreateTaskService) {
	        _classCallCheck(this, CreateTaskCtrl);
	
	        this.$http = $http;
	        this.$rootScope = $rootScope;
	        this.$state = $state;
	        this.getUsersData = DashboardService.getUsersData;
	        this.postAddTask = CreateTaskService.postAddTask;
	        this.users = [];
	        this.userAssigned = null;
	        this.taskName = '';
	        this.taskDsc = '';
	        this.alert = '';
	        this.task = [];
	
	        ////
	
	        this.addTask = this.addTask.bind(this);
	        this.getUsers = this.getUsers.bind(this);
	    }
	
	    _createClass(CreateTaskCtrl, [{
	        key: '$onInit',
	        value: function $onInit() {
	            this.getUsers();
	        }
	    }, {
	        key: '$onChanges',
	        value: function $onChanges() {
	            console.log('dupa');
	        }
	    }, {
	        key: 'getUsers',
	        value: function getUsers() {
	            var _this = this;
	
	            this.getUsersData().then(function (response) {
	                _this.users = response.data;
	            }, function (err) {
	                return console.log(err);
	            });
	        }
	    }, {
	        key: 'addTask',
	        value: function addTask() {
	            var _this2 = this;
	
	            this.task = {
	                id: 1,
	                date: new Date(),
	                done: 0,
	                status: 0,
	                taskName: this.taskName.toString(),
	                description: this.taskDsc,
	                comments: [],
	                assign: this.userAssigned
	            };
	
	            this.postAddTask(this.task).then(function (response) {
	                _this2.alert = {
	                    desc: 'New task added',
	                    type: 'success'
	                };
	            }, function (err) {
	                _this2.alert = {
	                    desc: err,
	                    type: 'danger'
	                };
	            }).then(function () {
	                _this2.$state.go('dashboard');
	                _this2.$rootScope.$broadcast('alert', _this2.alert);
	            });
	        }
	    }]);
	
	    return CreateTaskCtrl;
	}();
	
	exports.default = CreateTaskCtrl;
	
	
	CreateTaskCtrl.$inject = ['$http', '$rootScope', '$state', 'DashboardService', 'CreateTaskService'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogInCtrl = function LogInCtrl($http, $rootScope, LogInService) {
	    _classCallCheck(this, LogInCtrl);
	
	    this.$http = $http;
	    this.$rootScope = $rootScope;
	    this.getUserData = LogInService.getUserData;
	};
	
	exports.default = LogInCtrl;
	
	
	LogInCtrl.$inject = ['$http', '$rootScope', 'LogInService'];

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SidebarCtrl = function SidebarCtrl() {
	    _classCallCheck(this, SidebarCtrl);
	};
	
	exports.default = SidebarCtrl;
	
	
	SidebarCtrl.$inject = [];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var DashboardComponent = exports.DashboardComponent = {
	    templateUrl: '../app/Dashboard/dashboard.template.html',
	    controller: 'DashboardCtrl'
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var CreateTaskComponent = exports.CreateTaskComponent = {
	    templateUrl: '../app/Dashboard/CreateTask/create.task.template.html',
	    controller: 'CreateTaskCtrl'
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var SidebarComponent = exports.SidebarComponent = {
	    templateUrl: '../app/Sidebar/sidebar.template.html',
	    controller: 'SidebarCtrl'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map