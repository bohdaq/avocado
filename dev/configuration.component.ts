import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Item} from "./item";
import {SearchPipe} from "./search.pipe"
import {DatastoreService} from "./datastore.service";

@Component({
    selector: 'configuration',
    pipes: [SearchPipe],
    template: `
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input [(ngModel)]="term" type="text" class="form-control" placeholder="Search">
          </div>
        </form>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div *ngFor="#item of items | search : term">
                    <input #enabled [checked]="item.enabled" (change)="item.enabled = enabled.checked" type="checkbox">
                    <label>{{item.name}} | {{item.value}} | {{item.enabled}}</label>
                    <br />
                </div>
            </div>
        </div>
    `,
})
export class ConfigurationComponent {
    private term: string = "";
    private items: Item[];
    constructor(@Inject(DatastoreService) private _datastore: DatastoreService){
        this.items = _datastore.getData();
    }

}
