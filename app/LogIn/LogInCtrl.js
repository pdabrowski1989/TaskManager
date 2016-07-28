'use strict';

class LogInCtrl {
    constructor(LogInService) {
        var lCtrl = this;
        lCtrl.displayAlert = true;
        lCtrl.alertType = {};

        lCtrl.checkIfUsernameIsTaken = LogInService.checkIfUsernameIsTaken;
    }
}

angular
    .module('TaskManager')
    .controller('LogInCtrl', LogInCtrl);

