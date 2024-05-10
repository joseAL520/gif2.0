import {  Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl:'home.component.html' ,
  styleUrl: './home.component.css',
})
export class HomeComponent { 

  constructor( private gifsServices: GifService){

  }


  get gifs(): Gif[]{
      return this.gifsServices.gifList
  }

}
