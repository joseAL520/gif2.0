import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { SearchGiftComponent } from './components/shearch-box/search-box.component';
import { CartListComponent } from './components/card-list/card-list.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';




@NgModule({
  declarations: [
    HomeComponent,
    SearchGiftComponent,
    CartListComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports:[
    HomeComponent,
    SearchGiftComponent,
    CartListComponent,
    GifCardComponent
  ]
})
export class GifsModule { }
