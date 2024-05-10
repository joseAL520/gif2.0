import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { SearchGiftComponent } from './components/shearch-box/search-box.component';
import { CartListComponent } from './components/card-list/card-list.component';




@NgModule({
  declarations: [
    HomeComponent,
    SearchGiftComponent,
    CartListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    SearchGiftComponent,
    CartListComponent
  ]
})
export class GifsModule { }
