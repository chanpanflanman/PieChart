import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private api: HttpClient) { }

  getInfo() {
    return this.api.get<any>("http://localhost:3000/info");
  }
}
