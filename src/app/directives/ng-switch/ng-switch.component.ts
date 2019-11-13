import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>

      <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">You picked the red color</p>
        <p *ngSwitchCase="'blue'">You picked the blue color</p>
        <p *ngSwitchCase="'green'">You picked the green color</p>
        <p *ngSwitchDefault>Pick a color again!</p>
      </div>
    </div>
  `,
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  public name = "RufusMace";
  public color = "purple";

  constructor() { }

  ngOnInit() {
  }

}
