import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailComponent } from './item-detail.component';
import { BreadcrumbModule } from '../../components/breadcrumb/breadcrumb.module';



@NgModule({
  declarations: [
    ItemDetailComponent
  ],
  imports: [
    BreadcrumbModule,
    CommonModule
  ],
  exports: [
    ItemDetailComponent
  ]
})
export class ItemDetailModule { }
