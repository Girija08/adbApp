import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  logUrl:string;
  constructor(){
    this.title= "Book Store App";
    this.logUrl="/assets/booklogo.png";
  }
}
