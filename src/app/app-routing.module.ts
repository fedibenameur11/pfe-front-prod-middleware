import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Services/guard/auth.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"" , component:HomeComponent , canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
