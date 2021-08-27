import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor(private http: HttpClient) { }
  public httpdata:any;
  ngOnInit() {
    this.http.get('http://devopsapac29.conygre.com:8081/api/v1/company/all')
      .subscribe((data) => this.displaydata(data));
  }
  displaydata(data:any) { this.httpdata = data; }
}
