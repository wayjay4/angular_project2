import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>Property Binding'</h2>
      <h3>Welcome, '{{name}}'</h3>
      <input [id]="myId" type="text" value="rufusmace" /> <!-- property binding to the 'id' property -->
      <input id="{{myId}}" type="text" value="rufusmace" /> <!-- interpolation binding to 'id', NOTE: this only works with strings -->

      <br /><br />
      <!-- examples -->
      <input [id]="myId" bind-disabled="isDisabled" type="text" value="rufusmace" />  <!-- property binding works with boolean -->
      <input [id]="myId" disabled="{{isDisabled}}" type="text" value="rufusmace" />  <!-- interpolation binding does NOT work with boolean -->
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
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    var greeting = "Hello, " + this.name + ".";
    //console.log("myGreeting: "); console.dir(greeting);
    return greeting;
  }

}
