import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Stock {
  date:Date;
  id: number;
  symbol:string;
  open:number;
  close: number;
  high: number;
  low: number;
  volume: number;

}

@Component({
  selector: 'app-history-data',
  // templateUrl: './history-data.component.html',
  // styleUrls: ['./history-data.component.css']
  template: `
    <!--<nz-table #basicTable [nzData]="listOfData">-->
    <nz-table #basicTable [nzData]="httpdata">
      <thead>
        <tr>
          <th>dateTime</th>
          <th>stockId</th>
          <th>symbol</th>
          
          <th>openPrice</th>
          <th>closePrice</th>
          <th>highPrice</th>
          <th>lowPrice</th>
          <th>volume</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.date }}</td>
          <td>{{ data.id }}</td>
          <td>{{ data.symbol }}</td>
          <td>{{ data.open}}</td>
          <td>{{ data.close }}</td>
          <td>{{ data.high}}</td>
          <td>{{ data.low}}</td>
          <td>{{ data.volume }}</td>
          <td>
          <a>Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
})
// export class HistoryDataComponent {
//   listOfData: Stock[] = [
//     {
//       open: 150,
//       close: 180,
//       high: 186,
//       low: 143,
//       vol:10000,
//       // date_time: new Date()
//     },
//     {
//       open: 180,
//       close: 160,
//       high: 198,
//       low: 143,
//       vol:10000,
//       // date_time: new Date()
//     },
//     {
//       open: 150,
//       close: 180,
//       high: 186,
//       low: 143,
//       vol:10000,
//       // date_time: new Date()
//     }
//   ];
// }
export class HistoryDataComponent implements OnInit {
  constructor(private http: HttpClient) { }
  public httpdata:any;
  ngOnInit() {
    this.http.get('http://devopsapac29.conygre.com:8081/api/v1/stockprice/symbol/ADANIPORTS?begin=%222020-01-01%22&end=%222020-02-01%22')
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data:any) { this.httpdata = data; }
}
