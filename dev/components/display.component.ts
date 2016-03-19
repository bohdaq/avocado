import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {SearchPipe} from "../pipes/search.pipe";
import {TypeDirective} from "../directives/type.directive";
import {Item} from "../models/item";
import {DatastoreService} from "../services/datastore.service";


@Component({
    selector: 'configuration',
    pipes: [SearchPipe],
    template: `
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
                <input [(ngModel)]="term" type="text" placeholder="Search">
                <br />
                <div *ngFor="#item of items | search : term">
                    <div [hidden]="!item.enabled || item.type === 'dropdown'">
                        <label>{{item.name}}</label>
                        <div class="input-group">
                            <span [style.display]="item.type !== 'moneypicker' ? 'none' : 'table-cell'" class="input-group-addon">$</span>
                            <input 
                                [myType]="item.type" 
                                [(ngModel)]="item.value" 
                                (datepickerUpdates)="item.value = $event"
                                type="text">
                        </div>
                        <br />
                    </div>
                    <div class="dropup" [hidden]="!item.enabled || item.type !== 'dropdown'">
                      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{item.value === '' ? item.name : item.value}}
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li (click)="item.value = option" *ngFor="#option of item.options">{{option}}</li>
                      </ul>
                    </div>
                    <br />
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