import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
    <div>
      <h2>Welcome, {{parentData}}!</h2>
    </div>
  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  @Input () public parentData;

  constructor() { }

  ngOnInit() {
  }

}
