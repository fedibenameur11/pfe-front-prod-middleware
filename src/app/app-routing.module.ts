import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Services/guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
const routes: Routes = [
  {path:"" , component:HomeComponent , canActivate: [authGuard]},
  {path:"message" , component:MessageComponent , canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
