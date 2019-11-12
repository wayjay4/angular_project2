import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {
  public name = "RufusMace";

  constructor() { }

  ngOnInit() {
  }

}
