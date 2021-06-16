import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  empList:any;

  ngOnInit(): void {

    this.loginService.getAllEmp().subscribe(data=>this.empList=data);


  }



}
