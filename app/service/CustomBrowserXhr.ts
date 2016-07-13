import {HTTP_PROVIDERS, BrowserXhr} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomBrowserXhr extends BrowserXhr {
    constructor() {
        super()
    }
    build(): any {
        let xhr = super.build();
        xhr.withCredentials = true;
        return <any>(xhr);
    }
}
