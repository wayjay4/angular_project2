import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <div>
      <!--
      <div>
        <h2>first example (simple input from parent):</h2>
        <h3>Welcome, {{parentData}}!</h3>
      </div>

      <div>
        <h2>second example (input using ALIAS):</h2>
        <h3>Welcome, {{name}}!</h3>
      </div>
      -->

      <div>
        <h2>third example (input as a dataObj):</h2>
        <h3>Welcome, {{dataObj.name}}!</h3>
        <p>your id is: {{dataObj.id}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  //@Input () public parentData;  // example 1: simple input from parent
  //@Input ('parentData') public name; // example 2: using an alias
  @Input ('parentData') public dataObj; // example 3: sending a data object {}

  constructor() { }

  ngOnInit() {
  }

}
