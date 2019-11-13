import { Component, OnInit, Input } from '@angular/core';

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
  //@Input () public parentData;
  @Input ('parentData') public name; // using an alias

  constructor() { }

  ngOnInit() {
  }

}
