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
  products: Prod[] = [];
  cols: any[] = [];
  pieChartReq: boolean = false;
  rowTitle: boolean = false;
  nameForRow: string = '';


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

  generatePieChart(rowValue: any) {
    this.pieChartNumbers = rowValue.quantities;
    this.nameForRow = rowValue.name;
    this.pieChartReq = true;
    this.rowTitle = true;
  }

}
