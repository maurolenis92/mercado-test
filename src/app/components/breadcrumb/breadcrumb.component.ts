import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input() categories : any;
  @Input() categoryParam : any;
  public category: any;

  constructor (private _api: ApiService) {
    
  }
  ngOnInit(): void {
    if (this.categoryParam) {
      this.getDetail();
    }
  }

  async getDetail() {
    const data = await this._api.getCategory(this.categoryParam);
    console.log(data.item);
    this.category = data.item.name;
  }
}
