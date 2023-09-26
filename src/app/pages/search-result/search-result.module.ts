import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result.component';
import { ItemResultModule } from 'src/app/components/item-result/item-result.module';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';



@NgModule({
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    ItemResultModule,
    BreadcrumbModule
  ]
})
export class SearchResultModule { }
