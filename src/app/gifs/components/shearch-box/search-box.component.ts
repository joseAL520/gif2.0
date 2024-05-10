import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `

        <h5> Buscar:</h5>
        <input 
            type="text"
            class="form-control"
            placeholder="buscar Gift..."
            #txtTagInput
            (keyup.enter)="searchTag()"
        >

    `,
})

export class SearchGiftComponent {
    
    @ViewChild('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor(
        private gitServices: GifService
    ) { }

    searchTag(){
        const newTag = this.tagInput.nativeElement.value;

        this.gitServices.searchTag(newTag)
        console.log(newTag)
        this.tagInput.nativeElement.value = ''
    }
   
}