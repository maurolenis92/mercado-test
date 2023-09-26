import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/';

  constructor() { }

  getSearch = async (search: string) => {
    const urlReq = `${this.url}api/items?q=${search}`;
    const respt = await fetch( urlReq );
    const data = await respt.json();

    return data;
  }

  getItemDetail = async (id: string) => {
    const urlReq = `${this.url}api/items/${id}`;
    const respt = await fetch( urlReq );
    const data = await respt.json();

    return data;
  }
}
