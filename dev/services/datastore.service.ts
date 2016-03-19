import {
    Injectable
} from 'angular2/core';

import {Item} from './../models/item';

@Injectable()
export class DatastoreService {
    data: Item[];
    getData(): Item[]{
        if(this.data == null){
            this.data = [
                new Item("Name", "", true, "text", []),
                new Item("Age", "", true, "number", []),
                new Item("Sex", "", true, "dropdown", ['male', 'female']),
                new Item("Date Of Birth", "", true, "datepicker", []),
                new Item("Salary", "", true, "moneypicker", []),
            ];
        }
        return this.data;
    }
}
