import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {User } from './user';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }

  

  validateUser(user:User):Observable<User>{

    return this.http.get<User>("http://localhost:8099/getUser/"+user.name);

   
  }

  registerEmployee(employee:Employee){

     return this.http.post("http://localhost:8099/employee",
     {id:employee.id,name:employee.name,salary:employee.salary},{responseType:"text"});

  }

  getAllEmp(){

    return this.http.get("http://localhost:8099/getAllEmp");

  }

  deleteEmp(id:number){
   
    return this.http.delete("http://localhost:8099/deleteEmp/"+id);
  }


}
