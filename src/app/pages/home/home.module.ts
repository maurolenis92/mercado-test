import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SearchBoxModule } from 'src/app/components/search-box/search-box.module';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from '../search-result/search-result.component';
import { ItemDetailComponent } from 'src/app/pages/item-detail/item-detail.component';

const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('../search-result/search-result.module').then(m =>m.SearchResultModule),
    component: SearchResultComponent
  },
  {
    path: 'items/:id',
    loadChildren: () => import('../item-detail/item-detail.module').then(m =>m.ItemDetailModule),
    component: ItemDetailComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SearchBoxModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
