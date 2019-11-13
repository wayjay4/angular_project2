import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>
    </div>
  `,
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  public name = "RufusMace";
  
  constructor() { }

  ngOnInit() {
  }

}
