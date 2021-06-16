import { ThrowStmt } from '@angular/compiler';
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
  user:User|undefined;
  
  validateUser(loginForm:NgForm){

    this.loginServ.validateUser(new User(loginForm.value.name,loginForm.value.password))
    .subscribe(
      
      next=>{
        if(next.name===loginForm.value.name && next.password===loginForm.value.password){
          this.eventEmitter.emit(false);
          this.message="";
        }
        
      },
      
      error=>this.message="Invalid user name or password",
      ()=>{console.log("completed")}
   
    
    );
  
  }
  

}
