import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartModule } from 'primeng/chart';
import { PieComponent } from './pie/pie.component';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http'
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    TableModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
