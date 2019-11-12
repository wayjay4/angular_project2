import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>
      <p>Event Binding</p>
    </div>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
  public name = "RufusMace";

  constructor() { }

  ngOnInit() {
  }

}
