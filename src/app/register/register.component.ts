import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../Employee';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(public loginService:LoginService) { }


  empForm=new FormGroup({

    id:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    name:new FormControl(''),
    salary:new FormControl('')
  });
  
  get id(){
    return this.empForm.get('id');
  }
 
  message:string="";

  registerEmp(){

  this.loginService.registerEmployee
  (new Employee(this.empForm.value.id,this.empForm.value.name,this.empForm.value.salary))
  .subscribe(data=>this.message="Succesfully registered employee");

     this.empForm.reset();
    
  }


}
