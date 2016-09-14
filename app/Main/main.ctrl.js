'use strict';

export default class MainCtrl {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
        this.$rootScope.version = '1.0.0';
    }
}

MainCtrl.$inject = ['$rootScope'];
