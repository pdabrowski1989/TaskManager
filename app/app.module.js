'use strict';

// Configs
import LogInConfig from './Log/routes';
import DashboardConfig from '../app/Dashboard/routes';
import MainConfig from '../app/Main/routes';

// Services
import DashboardService from '../app/Dashboard/dashboard.service';
import CreateTaskService from '../app/Dashboard/CreateTask/create.task.service';
import LogInService from './Log/log.in.service';
import SignInService from './Log/SignIn/sign.in.service';

// Controllers
import MainCtrl from '../app/Main/main.ctrl';
import DashboardCtrl from '../app/Dashboard/dashboard.ctrl';
import CreateTaskCtrl from '../app/Dashboard/CreateTask/create.task.ctrl';
import LogInCtrl from './Log/log.in.ctrl';
import SignInCtrl from './Log/SignIn/sign.in.ctrl';
import SidebarCtrl from '../app/Sidebar/sidebar.ctrl';
import NavigationCtrl from '../app/Navigation/navigation.ctrl';

// Components
import {DashboardComponent} from '../app/Dashboard/dashboard.component';
import {CreateTaskComponent} from '../app/Dashboard/CreateTask/create.task.component';
import {SidebarComponent} from '../app/Sidebar/sidebar.component';
import {NavigationComponent} from '../app/Navigation/navigation.component';
import {LogComponent} from '../app/Log/log.in.component';
import {InComponent} from '../app/Log/in/in.component';
import {SignInComponent} from '../app/Log/SignIn/sign.in.component';

angular
    .module('TaskManager', [
        'ui.router',
        'ngSanitize'
    ])
    .config(LogInConfig)
    .config(DashboardConfig)
    .config(MainConfig)
    .service('DashboardService', DashboardService)
    .service('SignInService', SignInService)
    .service('LogInService', LogInService)
    .service('CreateTaskService', CreateTaskService)
    .controller('MainCtrl', MainCtrl)
    .controller('DashboardCtrl', DashboardCtrl)
    .controller('CreateTaskCtrl', CreateTaskCtrl)
    .controller('LogInCtrl', LogInCtrl)
    .controller('SignInCtrl', SignInCtrl)
    .controller('SidebarCtrl', SidebarCtrl)
    .controller('NavigationCtrl', NavigationCtrl)
    .component('createTaskComponent', CreateTaskComponent)
    .component('dashboardComponent', DashboardComponent)
    .component('navigationComponent', NavigationComponent)
    .component('sidebarComponent', SidebarComponent)
    .component('logComponent', LogComponent)
    .component('inComponent', InComponent)
    .component('signInComponent', SignInComponent);

