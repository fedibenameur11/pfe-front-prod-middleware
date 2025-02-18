import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../Services/keycloak/keycloak.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    focus: any;
    focus1: any;
    constructor(private keycloakService : KeycloakService)
    {}
  async ngOnInit(): Promise<void> {
  }
  
  
  async logout(){
      this.keycloakService.logout();
  }

}
