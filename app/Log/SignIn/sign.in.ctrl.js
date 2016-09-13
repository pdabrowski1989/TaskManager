'use strict';

export default class SignInCtrl {
    constructor(SignInService) {
        this.signInService = SignInService;
        this.

        /////

        this.createUser = this.createUser.bind(this);
    }

    createUser() {
        this.signInService.postUser().then((data)=> {
            console.log(data);
        }, (err) => console.log(err))
    }
}
