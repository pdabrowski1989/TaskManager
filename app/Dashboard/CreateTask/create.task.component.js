'use strict';

export const CreateTaskComponent = {
    templateUrl: '../app/Dashboard/CreateTask/create.task.template.html',
    controller: 'CreateTaskCtrl',
    bindings: {
        taskname: '<',
        taskdsc: '<',
        user: '='
    }
};
