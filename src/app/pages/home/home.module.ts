import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SearchBoxModule } from 'src/app/components/search-box/search-box.module';
import { ItemResultModule } from 'src/app/components/item-result/item-result.module';
import { ItemDetailModule } from 'src/app/components/item-detail/item-detail.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    ItemResultModule,
    ItemDetailModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
