'use strict';

export default class SidebarCtrl {
    constructor($rootScope) {
        this.user = 'Zalogowany';
        this.version = $rootScope.version;
        this.options = [
            {
                name: 'My tasks',
                state: ''
            },
            {
                name: 'All tasks',
                state: ''
            },
            {
                name: 'Log out',
                state: ''
            }
        ]
    }
}

SidebarCtrl.$inject = ['$rootScope'];