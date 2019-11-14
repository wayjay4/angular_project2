import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  public name = "rufus mace";
  public person = {
    firstName: "Rufus",
    lastName: "Mace",
    id: 21
  };

  constructor() { }

  ngOnInit() {
  }

}
