import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  searchParams = '';
  constructor(private _router: Router) {}

  public searchItem() {
    this._router.navigate([ 'items', {search: this.searchParams}]);
  }

  public goHome() {
    this._router.navigate(['']);
  }
}
