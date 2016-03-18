import {
    Injectable
} from 'angular2/core';

import {Item} from './Item';

@Injectable()
export class DatastoreService {
    data: Item[];
    getData(): Item[]{
        if(this.data == null){
            console.log("data is null");
            this.data = [
                new Item("Name", "", true),
                new Item("Surname", "", true),
                new Item("Age", "", true),
                new Item("Country", "", true),
                new Item("Efficiency", "", true),
                new Item("Address", "", true),
            ];
        }
        return this.data;
    }
}
