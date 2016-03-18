import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {DatastoreService} from "./datastore.service";
import {Item} from "./item";

@Component({
    selector: 'configuration',
    providers: [DatastoreService],
    template: `
        <h1>Configuration</h1>
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div *ngFor="#item of items;">
                    <input type="checkbox" id="name">
                    <label for="name">{{item.name}}</label>
                    <br />
                </div>
            </div>
        </div>
    `,
})
export class ConfigurationComponent {

    private items: Item[];
    constructor(@Inject(DatastoreService) private _datastore: DatastoreService){
        this.items = _datastore.getData();
        window.items = this.items;
        console.log(this.items);
    }

}
