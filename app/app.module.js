'use strict';

import LogInConfig from '../app/LogIn/routes';
import SignInConfig from '../app/SignIn/routes';

import LogInService from '../app/LogIn/LogInService';
import SignInService from '../app/SignIn/SignInService';

import LogInCtrl from '../app/LogIn/LogInCtrl';
import SignInCtrl from '../app/SignIn/SignInCtrl';

angular
    .module('TaskManager', [
        'ui.router'
    ])
    .config(LogInConfig)
    .config(SignInConfig)
    .service('SignInService', SignInService)
    .service('LogInService', LogInService)
    .controller('LogInCtrl', LogInCtrl)
    .controller('SignInCtrl', SignInCtrl);

