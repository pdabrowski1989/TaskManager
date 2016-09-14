'use strict';

export default class LogInCtrl {
    constructor($state, $rootScope, LogInService) {
        this.version = $rootScope.version;
        this.$state = $state;
        this.alert = {};
        this.showAlert = false;
        this.getUserData = LogInService.getUserData;
        this.logTitle = "Log <strong class='colored'>in.</strong>";

        ////

        this.messageDisplay = this.messageDisplay.bind(this);
        this.checkTitle = this.checkTitle.bind(this);
        $rootScope.$on('$viewContentLoaded', () => this.checkTitle());
        $rootScope.$on('userCreated', (event, data) => this.messageDisplay(data));
    }

    checkTitle() {
        if (this.$state.current.name === 'log.signin') {
            this.logTitle = "Sign <strong class='colored'>in.</strong>";
        } else if (this.$state.current.name === 'log.in') {
            this.logTitle = "Log <strong class='colored'>in.</strong>";
        }
    }

    messageDisplay(type) {
        this.showAlert = true;
        console.log(type);

        switch (type) {
            case 0:
                this.alert = {
                    message: 'User created successfully.',
                    cssClass: 'alert-success'
                };
                this.$state.go('log.in');
                break;
            case 1:
                this.alert = {
                    message: 'Something went wrong.',
                    cssClass: 'alert-danger'
                };
                this.$state.go('log.in');
                break;
            case 2:
                this.alert = {
                    message: 'This username is taken.',
                    cssClass: 'alert-warning'
                };
                break;
        }
    }
}

LogInCtrl.$inject = ['$state', '$rootScope', 'LogInService'];