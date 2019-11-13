import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <div>
      <h2>Welcome, {{parentData.name}}!</h2>
      <p>your id is: {{parentData.id}}</p>
    </div>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  //@Input () public parentData;
  //@Input ('parentData') public name; // using an alias
  @Input () public parentData; // sending an data object {}

  constructor() { }

  ngOnInit() {
  }

}
