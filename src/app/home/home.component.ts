import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../Services/keycloak/keycloak.service';
import { ConfigurationService } from '../Services/configuration/configuration.service';
import { AuthenticationType, Configuration, DatabaseType, DeploymentType, MiddlewareType, MonitoringType } from '../Models/configuration';
import { DeployService } from '../Services/deploy/deploy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  focus: any;
  focus1: any;
  config!: Configuration;

  selectedDatabase: DatabaseType | undefined; // Use undefined for initial state
  selectedMiddleware: MiddlewareType | undefined;
  selectedDeployment: DeploymentType | undefined;
  selectedAuthentication: AuthenticationType | undefined;
  selectedMonitoring: MonitoringType | undefined;

  databaseTypes = Object.keys(DatabaseType).filter(key => isNaN(Number(key)));
  deploymentTypes = Object.keys(DeploymentType).filter(key => isNaN(Number(key)));
  monitoringTypes = Object.keys(MonitoringType).filter(key => isNaN(Number(key)));
  middlewareTypes = Object.keys(MiddlewareType).filter(key => isNaN(Number(key)));
  authenticationTypes = Object.keys(AuthenticationType).filter(key => isNaN(Number(key)));

  constructor(private keycloakService: KeycloakService, private configurationService: ConfigurationService,private deployService: DeployService) { }

  async ngOnInit(): Promise<void> {
    console.log("Database Types:", this.databaseTypes);
    console.log("Deployment Types:", this.deploymentTypes);
    console.log("Authentication Types:", this.authenticationTypes);
    console.log("Middleware Types:", this.middlewareTypes);
    console.log("Monitoring Types:", this.monitoringTypes);
  }

  async logout() {
    this.keycloakService.logout();
  }

  confirmchoice() {
    console.log("Selected values before check:", {
      database: this.selectedDatabase,
      middleware: this.selectedMiddleware,
      deployment: this.selectedDeployment,
      authentication: this.selectedAuthentication,
      monitoring: this.selectedMonitoring
    });
  
    if (!this.selectedDatabase || !this.selectedDeployment || 
        !this.selectedAuthentication || !this.selectedMiddleware || 
        !this.selectedMonitoring) {
      console.log("please fill all the fields");
      return;
    }
  
    console.log("All fields are filled. Proceeding...");
    this.config = {
      id_config: 0,
      name: 'MyConfig',
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
  
    console.log("Triggering deployment...");
    this.deployService.triggerDeployment().subscribe(
      response => {
        console.log('Déploiement déclenché avec succès', response);
        alert('Le déploiement a été déclenché avec succès.');
      },
      error => {
        console.error('Erreur lors du déclenchement du déploiement', error);
        alert('Erreur lors du déclenchement du déploiement');
      }
    );
  }
  
}