import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor() { }


  empForm=new FormGroup({

    id:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    name:new FormControl(''),
    salary:new FormControl('')
  });
  
  get id(){
    return this.empForm.get('id');
  }


  registerEmp(){

    console.log(this.empForm.value.id);

  }


}
