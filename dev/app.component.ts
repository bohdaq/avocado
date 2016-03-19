import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {ConfigurationComponent} from './components/configuration.component';
import {DisplayComponent} from "./components/display.component";
import {HeaderComponent} from "./components/header.component";

@Component({
    selector: 'my-app',
    directives: [ConfigurationComponent, DisplayComponent, HeaderComponent, ROUTER_DIRECTIVES],
    template: `
        <my-header></my-header>
        
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
    {path: '/', name: "Configuration", component: ConfigurationComponent},
    {path: '/display', name: "Display", component: DisplayComponent}
])
export class AppComponent {

}
