import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../Services/keycloak/keycloak.service';
import { ConfigurationService } from '../Services/configuration/configuration.service';
import { AuthenticationType, Configuration, DatabaseType, DeploymentType, MiddlewareType, MonitoringType } from '../Models/configuration';
import { DeployService } from '../Services/deploy/deploy.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private keycloakService: KeycloakService, private configurationService: ConfigurationService,private deployService: DeployService,private toastr: ToastrService) { }

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
    console.log("Valeurs sélectionnées avant vérification :", {
      database: this.selectedDatabase,
      middleware: this.selectedMiddleware,
      deployment: this.selectedDeployment,
      authentication: this.selectedAuthentication,
      monitoring: this.selectedMonitoring
    });
  
    if (!this.selectedDatabase || !this.selectedDeployment || 
        !this.selectedAuthentication || !this.selectedMiddleware || 
        !this.selectedMonitoring) {
      console.log("Veuillez remplir tous les champs");
      this.toastr.error('Veuillez remplir tous les champs requis.', 'Erreur', {
        positionClass: 'toast-top-right',
        timeOut: 5000,
        progressBar: true
      });
      return;
    }
  
    console.log("Tous les champs sont remplis. Traitement en cours...");
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
  
    this.configurationService.addConfiguration(this.config).subscribe({
      next: (response) => {
        console.log('Configuration enregistrée avec succès', response);
        this.toastr.success('Configuration enregistrée avec succès.', 'Succès', {
          positionClass: 'toast-top-right',
          timeOut: 5000,
          progressBar: true
        });
      },
      error: (error) => {
        console.error('Erreur lors de l\'enregistrement de la configuration', error);
        this.toastr.error('Erreur lors de l\'enregistrement de la configuration.', 'Erreur', {
          positionClass: 'toast-top-right',
          timeOut: 5000,
          progressBar: true
        });
      }
    });
  
  }
  
  
}
