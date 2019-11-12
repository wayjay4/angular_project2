import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <div style="text_align:center;">
      <h2>Welcome, {{name}}!</h2>
    </div>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {
  public name = "RufusMace";
  public hasError = false;
  public isSpecial = true;

  constructor() { }

  ngOnInit() {
  }

}
