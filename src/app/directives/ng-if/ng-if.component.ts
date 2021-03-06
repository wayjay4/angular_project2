import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
    <div>
      <h2>Welcome, {{name}}!</h2>

      <p *ngIf="isDisplayElem; else theElseBlock">Should this paragraph be displayed? I was hiding before, but the class var 'isDisplayElem' is set to 'true'.</p>

      <ng-template #theElseBlock>
        <p>There is a paragragh hidden because the class var 'isDisplayElem' is set to 'false'.</p>
      </ng-template>
    </div>

    <!--
      1.) to add an else block, wrap the data in a 'ng-template' element using template reference var 'theElseBlock'
      2.) reference the elseBlock in the ngIf directive
    -->

    <!--
      Below is another example of ngIf directive using a 'thenBlock' and a 'elseBlock'
    -->

    <div>
      <p *ngIf="isDisplayElem; then thenBlock; else elseBlock">
      </p>

      <ng-template #thenBlock>
        This is the 'then' block.
      </ng-template>

      <ng-template #elseBlock>
        This is the 'else' block.
      </ng-template>
    </div>
  `,
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  public name = "RufusMace";
  public isDisplayElem = true;

  constructor() { }

  ngOnInit() {
  }

}
