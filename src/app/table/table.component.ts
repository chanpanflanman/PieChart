import { Component, OnInit } from '@angular/core';
import { TablesService } from '../services/tables.service';
import { Prod } from '../models/prod';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  pieChartNumbers: number[] = [];
  pieChartCats: any [] = []
  pieChartNames: any [] = []
  products: Prod[] = [];
  cols: any[] = [];
  pieChartReq: boolean = false;
  rowTitle: boolean = false;

  constructor(private http: TablesService) { }
  ngOnInit(): void {

    this.http.getInfo().subscribe((res) => {
      this.products = res;
    })

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantities', header: 'Quantities' }
    ];


  }

  generatePieChart() {
    this.pieChartNames = this.products.map((a: any) => a.name);
    this.pieChartCats = this.products.map((a: any) => a.category);
    this.pieChartNumbers = this.products.map((a: any) => a.quantities);
    this.pieChartReq = true;
    this.rowTitle = true;
  }

}
