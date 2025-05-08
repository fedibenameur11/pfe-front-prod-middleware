import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeployService {

  // URL de l'API Spring Boot
  private apiUrl = 'http://192.168.37.129/api/deploy/trigger';

  constructor(private http: HttpClient) { }

  // Méthode pour appeler l'API et déclencher le déploiement
  triggerDeployment(): Observable<any> {
    return this.http.post(this.apiUrl, {}, { responseType: 'text' });
  }
}
