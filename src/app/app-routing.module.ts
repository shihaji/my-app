import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {path:"register",component:RegisterComponent},
  {path:"update",component:UpdateComponent},
  {path:"search",component:SearchComponent},
  {path:"showAll/delete/:id",component:DeleteComponent},
  {path:"showAll",component:ShowAllComponent},
  {path:"**",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
