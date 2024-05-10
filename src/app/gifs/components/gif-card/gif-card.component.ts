import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gif-card',
  template: `

    <div class="card mb-2 text-center bg-dark">
      <img 
        class="card-img-top"
        [src]="gif.images.downsized_medium.url" 
        [alt]="gif.title"
      >

      <div class="card-body text-white">
        <p   class="card-text">
            {{ gif.title }}
        </p>
      </div>
    </div>

  `,
 
 
})
export class GifCardComponent  implements OnInit{
  
  
  @Input()
  public gif!: Gif;
  

  ngOnInit(): void {
    if( !this.gif) throw new Error('Gif Property')
  }

}
