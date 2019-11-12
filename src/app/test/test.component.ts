import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Varity of ways of using 'interpolation'</h2>
      <h3>Welcome, '{{name}}'</h3>
      <p>{{"Welcome " + name}}</p>
      <p>the sum of (2+2) = '{{2+2}}'</p>
      <p>the string length of your name is: '{{name.length}}'</p>
      <p>your name in all caps: '{{name.toUpperCase()}}'</p>
    </div>
  `,
  styles: [`
    div {
      text-align: center;
      margin-top: 25px;
      border: 1px solid blue;
    }

    div h2 {
      text-decoration: underline;
    }
  `]
})
export class TestComponent implements OnInit {
  public name = "RufusMace";

  constructor() { }

  ngOnInit() {
  }

}
