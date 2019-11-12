import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Class Binding'</h2>
      <h3>Welcome, '{{name}}'</h3>
      <p class="text-success">Codevolution</p>
      <p [class]="successClass">Codevolution</p>
      <p class="text-special" [class]="successClass">Codevolution</p> <!-- can only use one type of class definition not both, in this case the 'class binding' takes presidence over the tradtional class assignment -->
      <p [class]="combiningClasses">Codevolution</p> <!-- using more than one class in a binding -->

      <p [class.text-danger]="hasError">Codevolution</p> <!-- using a boolean to decide if class should be applied or not -->

      <p [ngClass]="messageClasses">Codevolution</p> <!-- another way of using more than one class in a binding with boolean -->
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
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {
  public name = "RufusMace";
  public successClass = "text-success";
  public combiningClasses = "text-success text-special";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    var greeting = "Hello, " + this.name + ".";
    //console.log("myGreeting: "); console.dir(greeting);
    return greeting;
  }

}
