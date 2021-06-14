import { Injectable } from '@angular/core';
import {User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  userAr:User[]=[

    new User("cts","1234"),
    new User("admin","admin"),
    new User("info","4321")
  ];


  validateUser(user:User):boolean{

    for(let u of this.userAr){
        if(u.name===user.name && u.password===user.password){
          return true;
        }
    }

       return false;

  }


}
