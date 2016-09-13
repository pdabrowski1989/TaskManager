'use strict';

export default class LogInCtrl {
    constructor($watch, $state, $rootScope, LogInService) {
        this.version = $rootScope.version;
        this.$state = $state;
        this.getUserData = LogInService.getUserData;
        this.$watch('logTitle', () => this.logTitle)

        ////

        this.checkTitle = this.checkTitle.bind(this);
        $rootScope.$on('$stateChangeStart', () => this.checkTitle());
    }

    $onInit() {
        this.checkTitle();
    }

    checkTitle() {
        if (this.$state.current.name === 'log.signin') {
            this.logTitle = "Sign <strong class='colored'>in.</strong>"
        } else {
            this.logTitle = "Log <strong class='colored'>in.</strong>"
        }
    }
}

LogInCtrl.$inject = ['$watch', '$state', '$rootScope', 'LogInService'];