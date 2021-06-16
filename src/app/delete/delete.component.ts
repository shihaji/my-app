import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,
     public loginService:LoginService,
     public router:Router) { }

  id:string="";

  ngOnInit(): void {
   
    this.id=this.activatedRoute.snapshot.params['id'];

    console.log(this.id);

    this.loginService.deleteEmp(Number(this.id)).subscribe(
      data=>{this.router.navigateByUrl("showAll");}
    )
    
  }

}
