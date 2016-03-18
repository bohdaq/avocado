import {
    Injectable
} from 'angular2/core';

import {Item} from './Item';

@Injectable()
export class DatastoreService {
     data: Item[] = [
        new Item("Name", true),
        new Item("Surname", true),
        new Item("Age", true),
        new Item("Country", true),
        new Item("Address", true),
    ];
    getData(): Item[]{
        return this.data;
    }
}
