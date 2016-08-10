'use strict';

// Configs
import LogInConfig from '../app/LogIn/routes';
import SignInConfig from '../app/SignIn/routes';

// Services
import DashboardService from '../app/Dashboard/DashboardService';
import LogInService from '../app/LogIn/LogInService';
import SignInService from '../app/SignIn/SignInService';

// Controllers
import MainCtrl from '../app/Main/MainCtrl';
import DashboardCtrl from '../app/Dashboard/DashboardCtrl';
import LogInCtrl from '../app/LogIn/LogInCtrl';
import SignInCtrl from '../app/SignIn/SignInCtrl';

angular
    .module('TaskManager', [
        'ui.router'
    ])
    .config(LogInConfig)
    .config(SignInConfig)
    .service('DashboardService', DashboardService)
    .service('SignInService', SignInService)
    .service('LogInService', LogInService)
    .controller('MainCtrl', MainCtrl)
    .controller('DashboardCtrl', DashboardCtrl)
    .controller('LogInCtrl', LogInCtrl)
    .controller('SignInCtrl', SignInCtrl);

