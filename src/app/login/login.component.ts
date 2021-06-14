import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public loginServ:LoginService) { }

  @Input()    // parent to child communication
  abc:string="";

  @Output()   // child to parent communication
  eventEmitter=new EventEmitter<boolean>();

  message:string="";
  
  validateUser(loginForm:NgForm){

    let flag=this.loginServ.validateUser(new User(loginForm.value.name,loginForm.value.password));

    if(flag){
         this.eventEmitter.emit(false);
      this.message="";
    }else{
      this.message="Invalid user name or password";
    }

  }
  

}
