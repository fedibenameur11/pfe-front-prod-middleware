import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  
  private _keycloak : Keycloak | undefined
  private _profile: UserProfile | undefined

  get keycloak(){
    if(!this._keycloak)
    {
      this._keycloak=new Keycloak({
        url: 'http://192.168.37.129:8081',
        realm: 'config-generator',
        clientId: 'angular-client'
      });
    }
    return this._keycloak
  }

  get profile() :UserProfile | undefined
  {
    return this._profile
  }

  constructor() {
    console.log("KeycloakService instancié");
  }

  async init() {
    console.log("authentification user...")
    const authenticated = await this.keycloak.init({
      onLoad: 'login-required',
    });

    if (authenticated) {
      console.log("mrglll")

      this._profile = (await this.keycloak.loadUserProfile()) as UserProfile;
      this._profile.token = this.keycloak.token || '';
    }
  }

  login() {
    return this.keycloak.login();
  }
  logout(){
    return this.keycloak?.logout({redirectUri: 'http://192.168.37.129/'}) //it was 4200 before
  }
}
 