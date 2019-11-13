import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>
    </div>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  public name = "RufusMace";
  
  constructor() { }

  ngOnInit() {
  }

}
