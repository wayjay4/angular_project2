import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Class Binding'</h2>
      <h3>Welcome, '{{name}}'</h3>
      <p>Codevolution</p>
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

    .text-success {
      color: green;
    }

    .text-danger {
      color: red;
    }

    .text-special {
      color: italic;
    }
  `]
})
export class TestComponent implements OnInit {
  public name = "RufusMace";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    var greeting = "Hello, " + this.name + ".";
    //console.log("myGreeting: "); console.dir(greeting);
    return greeting;
  }

}
