import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {Item} from "./../models/item";
import {SearchPipe} from "./../pipes/search.pipe"
import {DatastoreService} from "./../services/datastore.service";

@Component({
    selector: 'configuration',
    pipes: [SearchPipe],
    template: `
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <input [(ngModel)]="term" type="text" placeholder="Search">
                <div *ngFor="#item of items | search : term">
                    <input #enabled [checked]="item.enabled" (change)="item.enabled = enabled.checked" type="checkbox">
                    <label>{{item.name}}</label>
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
