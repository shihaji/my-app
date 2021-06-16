import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';



@NgModule({
  declarations: [
    SalaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SalaryComponent
  ]
})
export class PayrollModule { }
