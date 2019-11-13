import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>
    </div>
  `,
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  public name = "RufusMace";

  constructor() { }

  ngOnInit() {
  }

}
