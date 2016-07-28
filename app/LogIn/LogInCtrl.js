'use strict';

class LogInCtrl {
    constructor(LogInService) {
        var lCtrl = this;
        lCtrl.displayAlert = true;
        lCtrl.alertType = {};
    }
}

angular
    .module('TaskManager')
    .controller('LogInCtrl', LogInCtrl);

