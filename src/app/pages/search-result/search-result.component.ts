import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {

  public data: any

  constructor (private _api: ApiService, private _activeRoute: ActivatedRoute) {
      _activeRoute.params.subscribe( t => {
        const {search} = t;
        this.getResults(search);
      })
  }
  
  async getResults(params: any) {
    const data = await this._api.getSearch(params);
    if (data.items && data.items.length > 0) {
      data.items = data.items.slice(0,4);
     for (const item of data.items) {
       const formatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: item.price.currency,
       });
      item.price.amount = formatter.format(item.price.amount).replace(item.price.currency, '');
     }
     this.data = data;
   }
  }
}
