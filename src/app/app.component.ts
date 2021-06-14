import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  flag:boolean=true;
   
  login:string="SignUp Form";

  toggleComp(s:boolean){

    console.log("app component")
    this.flag=s;

  }

}
