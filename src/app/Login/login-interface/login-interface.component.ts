import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'src/app/Services/keycloak/keycloak.service';

@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements OnInit{
  focus: any;
  focus1: any;
  constructor(private keycloakService : KeycloakService)
  {}
async ngOnInit(): Promise<void> {
    await this.keycloakService.init();
    await this.keycloakService.login();
}


async logout(){
  /*localStorage.removeItem('token')
    window.location.reload()*/
    this.keycloakService.logout();
}

}
