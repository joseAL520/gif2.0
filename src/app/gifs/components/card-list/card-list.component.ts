

import { Component, Input} from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
    selector: 'gift-card-list',
    templateUrl: 'card-list.component.html'
})

export class CartListComponent {

    @Input()
    public  gifList: Gif[] = [];

    constructor() { }

   
}