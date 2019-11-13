import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>
      <p>Event Binding</p>

      <button (click)="onClick($event)">Show Generated Greeting</button>

      <button (click)="this.greeting='Welcome, dude!'">Another Greet Button</button>

      <p>{{greeting}}</p>
    </div>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {
  public name = "RufusMace";
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    this.greeting = "Welcome to your application, "+this.name+"! (this is a generated greeting)"
    console.log(this.greeting);
    console.log("event: "); console.log(event); console.dir(event); console.dir(event.type);
  }

}
