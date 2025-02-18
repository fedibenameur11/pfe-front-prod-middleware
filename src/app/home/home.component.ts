import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../Services/keycloak/keycloak.service';
import { ConfigurationService } from '../Services/configuration.service';
import { AuthenticationType, Configuration, DatabaseType, DeploymentType, MiddlewareType, MonitoringType } from '../Models/configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

    focus: any;
    focus1: any;
    config!: Configuration
    selectedDatabase!: DatabaseType;
    selectedMiddleware!: MiddlewareType;
    selectedDeployment!: DeploymentType;
    selectedAuthentication!: AuthenticationType;
    selectedMonitoring!: MonitoringType;

    constructor(private keycloakService : KeycloakService,private configurationService: ConfigurationService)
    {}
  async ngOnInit(): Promise<void> {
  }
  
  
  async logout(){
      this.keycloakService.logout();
  }
  confirmchoice() {
    this.config = {
      id_config: 0,
      name: 'MyConfig', // Tu peux ajouter un champ input pour le nom
      databaseType: this.selectedDatabase,
      middleware: this.selectedMiddleware,
      deployment: this.selectedDeployment,
      authentication: this.selectedAuthentication,
      monitoring: this.selectedMonitoring,
      user: undefined,
      project: undefined,
    };
  
    this.configurationService.addConfiguration(this.config).subscribe(response => {
      console.log('Configuration saved successfully', response);
    }, error => {
      console.error('Error saving configuration', error);
    });
  }

}
