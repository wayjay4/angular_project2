import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  template: `<div>
              <h3>Inline Template</h3>
            </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
