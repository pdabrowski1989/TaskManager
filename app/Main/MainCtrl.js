'use strict';

export default class MainCtrl {
    constructor($rootScope, $state) {
        this._$rootScope = $rootScope;
        this._$state = $state;
        this._$rootScope.isLoged = false;
    }


}

MainCtrl.$inject = ['$rootScope', '$state'];
