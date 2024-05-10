import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent { 

 

  constructor(
    private gifServices: GifService
  ){}


  get tagHyst(){
    return  this.gifServices.tagHistory
  }

  
}
