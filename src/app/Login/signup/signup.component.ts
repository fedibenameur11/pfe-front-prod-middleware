import { Component } from '@angular/core';
import { User,RoleType } from 'src/app/Models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = new User()
  RoleType = RoleType;

  onSignup() {
    console.log("User signed up:", this.user);
    // Ajouter la logique pour envoyer les données au backend ici
  }

}
