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
	__webpack_require__(16);
	__webpack_require__(10);
	__webpack_require__(5);
	__webpack_require__(3);
	__webpack_require__(9);
	__webpack_require__(4);
	__webpack_require__(19);
	__webpack_require__(15);
	__webpack_require__(18);
	__webpack_require__(14);
	__webpack_require__(20);
	__webpack_require__(12);
	__webpack_require__(7);
	__webpack_require__(2);
	__webpack_require__(17);
	__webpack_require__(11);
	__webpack_require__(6);
	__webpack_require__(23);
	__webpack_require__(22);
	__webpack_require__(13);
	module.exports = __webpack_require__(8);


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
	
	var _logIn = __webpack_require__(7);
	
	var _logIn2 = _interopRequireDefault(_logIn);
	
	var _signIn = __webpack_require__(8);
	
	var _signIn2 = _interopRequireDefault(_signIn);
	
	var _main = __webpack_require__(9);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _dashboard3 = __webpack_require__(10);
	
	var _dashboard4 = _interopRequireDefault(_dashboard3);
	
	var _createTask3 = __webpack_require__(11);
	
	var _createTask4 = _interopRequireDefault(_createTask3);
	
	var _logIn3 = __webpack_require__(12);
	
	var _logIn4 = _interopRequireDefault(_logIn3);
	
	var _signIn3 = __webpack_require__(13);
	
	var _signIn4 = _interopRequireDefault(_signIn3);
	
	var _sidebar = __webpack_require__(14);
	
	var _sidebar2 = _interopRequireDefault(_sidebar);
	
	var _navigation = __webpack_require__(15);
	
	var _navigation2 = _interopRequireDefault(_navigation);
	
	var _dashboard5 = __webpack_require__(16);
	
	var _createTask5 = __webpack_require__(17);
	
	var _sidebar3 = __webpack_require__(18);
	
	var _navigation3 = __webpack_require__(19);
	
	var _logIn5 = __webpack_require__(20);
	
	var _in = __webpack_require__(21);
	
	var _signIn5 = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Controllers
	
	
	// Services
	angular.module('TaskManager', ['ui.router', 'ngSanitize']).config(_routes2.default).config(_routes4.default).config(_routes6.default).service('DashboardService', _dashboard2.default).service('SignInService', _signIn2.default).service('LogInService', _logIn2.default).service('CreateTaskService', _createTask2.default).controller('MainCtrl', _main2.default).controller('DashboardCtrl', _dashboard4.default).controller('CreateTaskCtrl', _createTask4.default).controller('LogInCtrl', _logIn4.default).controller('SignInCtrl', _signIn4.default).controller('SidebarCtrl', _sidebar2.default).controller('NavigationCtrl', _navigation2.default).component('createTaskComponent', _createTask5.CreateTaskComponent).component('dashboardComponent', _dashboard5.DashboardComponent).component('navigationComponent', _navigation3.NavigationComponent).component('sidebarComponent', _sidebar3.SidebarComponent).component('logComponent', _logIn5.LogComponent).component('inComponent', _in.InComponent).component('signInComponent', _signIn5.SignInComponent);
	
	// Components

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = LogInConfig;
	function LogInConfig($stateProvider) {
	    $stateProvider.state('log', {
	        url: '/log',
	        template: '<log-component></log-component>'
	    }).state('log.in', {
	        url: '/in',
	        template: '<in-component></in-component>'
	    }).state('log.signin', {
	        url: '/signin',
	        template: '<sign-in-component username="username" password="password" email="email"></sign-in-component>'
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
	exports.default = DashboardConfig;
	function DashboardConfig($stateProvider) {
	    $stateProvider.state('home.dashboard', {
	        url: '/dashboard',
	        template: '<dashboard-component></dashboard-component>'
	    }).state('home.createTask', {
	        url: '/createtask',
	        template: '<create-task-component taskname="$ctrl.taskName" taskdsc="$ctrl.taskdsc" user="$ctrl.model"></create-task-component>'
	    });
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = MainConfig;
	function MainConfig($stateProvider) {
	    $stateProvider.state('home', {
	        url: '/home',
	        controller: 'MainCtrl',
	        controllerAs: 'mCtrl',
	        templateUrl: '../app/Main/home.template.html'
	    });
	}
	
	MainConfig.$inject = ['$stateProvider'];

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
	        key: 'postUser',
	        value: function postUser(user) {
	            return this.$http.post('api/authenticate', user);
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SignInService = function () {
	    function SignInService($http) {
	        _classCallCheck(this, SignInService);
	
	        this.$http = $http;
	
	        //////
	
	        this.postUser = this.postUser.bind(this);
	    }
	
	    _createClass(SignInService, [{
	        key: 'postUser',
	        value: function postUser(user) {
	            return this.$http.post('api/user', user);
	        }
	    }]);
	
	    return SignInService;
	}();
	
	exports.default = SignInService;
	
	
	SignInService.$inject = ['$http'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainCtrl = function MainCtrl($rootScope) {
	    _classCallCheck(this, MainCtrl);
	
	    this.$rootScope = $rootScope;
	    this.$rootScope.version = '1.0.0';
	};
	
	exports.default = MainCtrl;
	
	
	MainCtrl.$inject = ['$rootScope'];

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
	        this.allInputsAreFilled = false;
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogInCtrl = function () {
	    function LogInCtrl($state, $rootScope, LogInService) {
	        var _this = this;
	
	        _classCallCheck(this, LogInCtrl);
	
	        this.version = $rootScope.version;
	        this.$state = $state;
	        this.showAlert = false;
	        this.getUserData = LogInService.getUserData;
	        this.logTitle = "Log <strong class='colored'>in.</strong>";
	
	        ////
	
	        this.checkTitle = this.checkTitle.bind(this);
	        $rootScope.$on('$viewContentLoaded', function () {
	            return _this.checkTitle();
	        });
	        $rootScope.$on('userCreated', function (event, data) {
	            _this.showAlert = true;
	            if (data) {
	                _this.alert = {
	                    message: 'User created successfully',
	                    cssClass: 'alert-success'
	                };
	            } else {
	                _this.alert = {
	                    message: 'Something went wrong',
	                    cssClass: 'alert-danger'
	                };
	            }
	        });
	    }
	
	    _createClass(LogInCtrl, [{
	        key: 'checkTitle',
	        value: function checkTitle() {
	            if (this.$state.current.name === 'log.signin') {
	                this.logTitle = "Sign <strong class='colored'>in.</strong>";
	            } else if (this.$state.current.name === 'log.in') {
	                this.logTitle = "Log <strong class='colored'>in.</strong>";
	            }
	        }
	    }]);
	
	    return LogInCtrl;
	}();
	
	exports.default = LogInCtrl;
	
	
	LogInCtrl.$inject = ['$state', '$rootScope', 'LogInService'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SignInCtrl = function () {
	    function SignInCtrl($rootScope, $state, SignInService) {
	        _classCallCheck(this, SignInCtrl);
	
	        this.$rootScope = $rootScope;
	        this.$state = $state;
	        this.signInService = SignInService;
	        this.user = {};
	
	        /////
	
	        this.createUser = this.createUser.bind(this);
	    }
	
	    _createClass(SignInCtrl, [{
	        key: 'createUser',
	        value: function createUser() {
	            var _this = this;
	
	            this.user = {
	                username: this.username,
	                password: this.password,
	                email: this.email
	            };
	
	            this.signInService.postUser(this.user).then(function (res) {
	                _this.$rootScope.$emit('userCreated', res.data.success);
	                _this.$state.go('log.in');
	            }, function (err) {
	                return console.log(err);
	            });
	        }
	    }]);
	
	    return SignInCtrl;
	}();
	
	exports.default = SignInCtrl;
	
	
	SignInCtrl.$inject = ['$rootScope', '$state', 'SignInService'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SidebarCtrl = function SidebarCtrl($rootScope) {
	    _classCallCheck(this, SidebarCtrl);
	
	    this.user = 'Zalogowany';
	    this.version = $rootScope.version;
	    this.options = [{
	        name: 'My tasks',
	        state: ''
	    }, {
	        name: 'All tasks',
	        state: ''
	    }, {
	        name: 'Log out',
	        state: ''
	    }];
	};
	
	exports.default = SidebarCtrl;
	
	
	SidebarCtrl.$inject = ['$rootScope'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NavigationCtrl = function NavigationCtrl($rootScope) {
	    _classCallCheck(this, NavigationCtrl);
	};
	
	exports.default = NavigationCtrl;
	
	
	NavigationCtrl.$inject = ['$rootScope'];

/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var CreateTaskComponent = exports.CreateTaskComponent = {
	    templateUrl: '../app/Dashboard/CreateTask/create.task.template.html',
	    controller: 'CreateTaskCtrl',
	    bindings: {
	        taskname: '<',
	        taskdsc: '<',
	        user: '='
	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var SidebarComponent = exports.SidebarComponent = {
	    templateUrl: '../app/Sidebar/sidebar.template.html',
	    controller: 'SidebarCtrl',
	    bindings: {}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var NavigationComponent = exports.NavigationComponent = {
	    templateUrl: '../app/Navigation/navigation.template.html',
	    controller: 'NavigationCtrl'
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var LogComponent = exports.LogComponent = {
	    templateUrl: '../app/Log/log.template.html',
	    controller: 'LogInCtrl'
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var InComponent = exports.InComponent = {
	    templateUrl: '../app/Log/In/in.template.html',
	    controller: 'LogInCtrl'
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var SignInComponent = exports.SignInComponent = {
	    templateUrl: '../app/Log/SignIn/sign.in.template.html',
	    controller: 'SignInCtrl',
	    bindings: {
	        username: '<',
	        password: '<',
	        email: '<'
	    }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var InComponent = exports.InComponent = {
	    templateUrl: '../app/Log/In/in.template.html',
	    controller: 'LogInCtrl'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map