import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginInterfaceComponent } from './Login/login-interface/login-interface.component';
import { SignupComponent } from './Login/signup/signup.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { authGuard } from './Services/guard/auth.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"login",component:LoginInterfaceComponent },
  {path: "signup", component:SignupComponent },
  {path: 'access-denied',component: AccessDeniedComponent , canActivate: [authGuard] },
  {path:"" , component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
