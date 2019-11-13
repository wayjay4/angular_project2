import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>

      <p *ngIf="isDisplayElem">Should this paragraph be displayed?</p>
    </div>
  `,
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  public name = "RufusMace";
  public isDisplayElem = false;

  constructor() { }

  ngOnInit() {
  }

}
