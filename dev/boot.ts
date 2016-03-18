/// <reference path="../typings/browser.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {ROUTER_PROVIDERS} from "angular2/router";
import {DatastoreService} from "./datastore.service";


bootstrap(AppComponent, [ROUTER_PROVIDERS, DatastoreService]);
