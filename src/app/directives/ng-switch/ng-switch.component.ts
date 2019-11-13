import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>

      <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">You picked the {{color}} color</p>
        <p *ngSwitchCase="'blue'">You picked the {{color}} color</p>
        <p *ngSwitchCase="'green'">You picked the {{color}} color</p>
      </div>
    </div>
  `,
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  public name = "RufusMace";
  public color = "blue";

  constructor() { }

  ngOnInit() {
  }

}
