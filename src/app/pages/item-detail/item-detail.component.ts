import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

  data: any;
  constructor (private _api: ApiService, private _activeRoute: ActivatedRoute) {
    _activeRoute.params.subscribe( t => {
      const {id} = t;
      this.getDetail(id);
    })
  }

  async getDetail(params: any) {
    const data = await this._api.getItemDetail(params);
    const formatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: data.item.price.currency,
       });
      data.item.price.amount = formatter.format(data.item.price.amount).replace(data.item.price.currency, '');
    this.data = data.item;
  }
}
