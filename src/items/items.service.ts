import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/items.interface';

@Injectable()
export class ItemsService {

    private readonly items: Item[] = [
        {
            id : "3456545236",
            name: "Signal",
            qty : 100,
            description : "Tooth paste"
        },
        {
            id : "8786656561",
            name: "Lux",
            qty : 40,
            description : "Soap for body wash"
        }
    ];

    findAll(): Item[]{
        return this.items;
    }
}
