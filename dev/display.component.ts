import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {DatastoreService} from "./datastore.service";
import {Item} from "./item";
import {SearchPipe} from "./search.pipe"
import {TypeDirective} from "./type.directive";

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
                    <div [hidden]="!item.enabled">
                        <label>{{item.name}}</label>
                        <input ngType [(ngModel)]="item.value" type="text">{{item.value}}
                        <br />
                    </div>
                </div>
            </div>
        </div>
    `,
    directives: [TypeDirective]
})
export class DisplayComponent {
    private term: string = "";
    private items: Item[];
    constructor(@Inject(DatastoreService) private _datastore: DatastoreService){
        this.items = _datastore.getData();
    }

}