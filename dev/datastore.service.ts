import {
    Injectable
} from 'angular2/core';

import {Item} from './Item';

@Injectable()
export class DatastoreService {
    getData(): Item[]{
        var data: Item[] = [];
        for (var i = 0; i < 10; i++){
            const name: string = "Item" + i;
            const item: Item = new Item(name, true);
            data.push(item);
        }
        return data;
    }
}
