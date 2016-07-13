///<reference path="../typings/browser.d.ts" />

import {AppComponent} from './app.component';
import {provide} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS, BrowserXhr} from '@angular/http';
import {CustomBrowserXhr} from "./service/CustomBrowserXhr";

import {
    PlatformLocation,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    PathLocationStrategy,
    APP_BASE_HREF }
    from '@angular/common';
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/dist';

var appPromise = bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(BrowserXhr, {useClass: CustomBrowserXhr}),
    LocalStorageService,
]);

LocalStorageSubscriber(appPromise);