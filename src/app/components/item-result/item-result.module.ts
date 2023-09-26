import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemResultComponent } from './item-result.component';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';



@NgModule({
  declarations: [
    ItemResultComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    ItemResultComponent
  ]
})
export class ItemResultModule { }
