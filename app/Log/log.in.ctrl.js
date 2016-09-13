'use strict';

export default class LogInCtrl {
    constructor($state, $rootScope, LogInService) {
        this.version = $rootScope.version;
        this.$state = $state;
        this.showAlert = false;
        this.getUserData = LogInService.getUserData;
        this.logTitle = "Log <strong class='colored'>in.</strong>";

        ////

        this.checkTitle = this.checkTitle.bind(this);
        $rootScope.$on('$viewContentLoaded', () => this.checkTitle());
        $rootScope.$on('userCreated', (event, data) => {
            this.showAlert = true;
            if (data) {
                this.alert = {
                    message: 'User created successfully',
                    cssClass: 'alert-success'
                };
            } else {
                this.alert = {
                    message: 'Something went wrong',
                    cssClass: 'alert-danger'
                };
            }
        })
    }

    checkTitle() {
        if (this.$state.current.name === 'log.signin') {
            this.logTitle = "Sign <strong class='colored'>in.</strong>"
        } else if (this.$state.current.name === 'log.in') {
            this.logTitle = "Log <strong class='colored'>in.</strong>"
        }
    }
}

LogInCtrl.$inject = ['$state', '$rootScope', 'LogInService'];