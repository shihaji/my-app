import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag:boolean=true;
   
  login:string="SignUp Form";

  toggleComp(s:boolean){

    console.log("super component")
    this.flag=s;

  }

}
