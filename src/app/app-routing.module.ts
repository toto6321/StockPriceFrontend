import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartComponent} from "./chart/chart.component";
import {HistoryDataComponent} from "./history-data/history-data.component";
import {SummaryComponent} from "./summary/summary.component";


const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'history', component: HistoryDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
