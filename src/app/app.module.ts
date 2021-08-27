import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';

import { AppRoutingModule } from './app-routing.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {AppComponent} from "./app.component";
import { SummaryComponent } from './summary/summary.component';
import { ChartComponent } from './chart/chart.component';
import { HistoryDataComponent } from './history-data/history-data.component';
 // import { ChartModule } from 'angular-highcharts';




registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ChartComponent,
    HistoryDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
