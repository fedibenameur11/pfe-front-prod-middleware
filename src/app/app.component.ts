import { Component } from '@angular/core';
import { KeycloakService } from './Services/keycloak/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfe_frontend';
  constructor(private keycloakService: KeycloakService) {}
  logout() {
    this.keycloakService.logout();
  }
}
