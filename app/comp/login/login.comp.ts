import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {LocalStorage, SessionStorage} from "angular2-localstorage/dist";

@Component({
    moduleId: module.id,
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})

export class Login implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

}
