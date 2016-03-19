import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {ConfigurationComponent} from './components/configuration.component';
import {DisplayComponent} from "./components/display.component";

@Component({
    selector: 'my-app',
    directives: [ConfigurationComponent, DisplayComponent, ROUTER_DIRECTIVES],
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Avocado</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Configuration']">Configuration</a></li>
                        <li><a [routerLink]="['Display']">Display</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        
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
