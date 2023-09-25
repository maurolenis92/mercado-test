import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from './item-detail.component';



@NgModule({
  declarations: [
    ItemDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemDetailComponent
  ]
})
export class ItemDetailModule { }
