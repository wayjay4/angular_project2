import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>
    </div>
  `,
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  public name = "RufusMace";

  constructor() { }

  ngOnInit() {
  }

}
