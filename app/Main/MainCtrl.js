'use strict';

export default class MainCtrl {
    constructor($rootScope, $state) {
        this.$rootScope = $rootScope;
        this.$state = $state;

        ///

        this.$rootScope.$on('isLoged', this.isLogedd())
    }

    isLogedd() {
        return this.$state.go('dashboard');
    }
}

MainCtrl.$inject = ['$rootScope', '$state'];
