import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RufusMace App';
  public name = "RufusMace";
  public dataObj = {
    id: 21,
    name: "RufusMace"
  };
  public message: "";
}
