import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SuperComponent } from './super/super.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowAllComponent } from './show-all/show-all.component';
import { PayrollModule } from './payroll/payroll.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SuperComponent,
    RegisterComponent,
    SearchComponent,
    UpdateComponent,
    DeleteComponent,
    ShowAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PayrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
