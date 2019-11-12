import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <div style="text_align:center;">
      <h2>Welcome, {{name}}!</h2>
      <p [style.color]="'orange'">Style Binding</p>
      <p [style.color]="hasError ? 'red': 'green'">Style Binding</p>

      <p [style.color]="highlightColor">Style Binding 2</p>

      <p [ngStyle]="titleStyles">Style Binding 3</p>
    </div>
  `,
  styles: []
})
export class StyleBindingComponent implements OnInit {
  public name = "RufusMace";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic",
  };

  constructor() { }

  ngOnInit() {
  }

}
