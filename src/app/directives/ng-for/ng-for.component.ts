import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>

      <h3>ngFor using 'index'</h3>
      <div *ngFor="let color of colorsArr; index as i">
        <p>{{i}}: {{color}}</p>
      </div><br /><br />

      <h3>ngFor using 'first'</h3>
      <div *ngFor="let color of colorsArr; first as f">
        <p>{{f}}: {{color}}</p>
      </div><br /><br />

      <h3>ngFor using 'last'</h3>
      <div *ngFor="let color of colorsArr; last as l">
        <p>{{l}}: {{color}}</p>
      </div><br /><br />

      <h3>ngFor using 'odd'</h3>
      <div *ngFor="let color of colorsArr; odd as o">
        <p>{{o}}: {{color}}</p>
      </div><br /><br />

      <h3>ngFor using 'even'</h3>
      <div *ngFor="let color of colorsArr; even as e">
        <p>{{e}}: {{color}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  public name = "RufusMace";
  public colorsArr = ["red", "blue", "green", "yellow"];

  constructor() { }

  ngOnInit() {
  }

}
