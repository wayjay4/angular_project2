import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>

      <div *ngFor="let color of colorsArr">
        <p>{{color}}</p>
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
