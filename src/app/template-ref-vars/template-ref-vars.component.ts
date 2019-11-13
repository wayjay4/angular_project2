import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-vars',
  templateUrl: './template-ref-vars.component.html',
  styleUrls: ['./template-ref-vars.component.css']
})
export class TemplateRefVarsComponent implements OnInit {
  public name = "RufusMace";
  public inputVal = "";

  constructor() { }

  ngOnInit() {
  }

  logMessage(val){
    this.inputVal = val;
    console.log("val: ");
    console.dir(this.inputVal);
  }
}
