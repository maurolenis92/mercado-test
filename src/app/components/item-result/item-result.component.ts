import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-result',
  templateUrl: './item-result.component.html',
  styleUrls: ['./item-result.component.scss']
})
export class ItemResultComponent {

  @Input() data: any;

  constructor(private _router: Router) {}

  showDetail() {
    this._router.navigate(['items', this.data.id])
  }
}
