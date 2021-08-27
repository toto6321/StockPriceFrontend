import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nz-layout>
      <!--<nz-header>Header</nz-header>-->
      <nz-content>
        <h1>NSDAQ index</h1>
        <nav>
          <!--<a routerLink="/">Summary</a>&nbsp;|&nbsp;-->
          <a routerLink="/chart">Chart</a> &nbsp;|&nbsp;
          <a routerLink="/history">History Data</a>
        </nav>
        <router-outlet></router-outlet>
      </nz-content>
      <!--<nz-footer>Footer</nz-footer>-->
    </nz-layout>


  `,
  styles: [
    `

      nz-header,
      nz-footer {
        background: #7dbcea;
        color: #fff;
      }
    `
  ]
})
export class AppComponent {
  title = 'group7work';
}
