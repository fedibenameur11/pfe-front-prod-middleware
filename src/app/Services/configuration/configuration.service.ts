import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../../Models/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private baseUrl : string = 'http://localhost:8100/configuration';
  
    constructor(private http: HttpClient) { }
    findAllConfigurations(): Observable<Configuration[]>{
      return this.http.get<Configuration[]>(this.baseUrl + '/list');
    }
  
    addConfiguration(configuration : Configuration): Observable<Configuration>{
      return this.http.post<Configuration>(this.baseUrl + '/addConfiguration',configuration);
    }
    updateConfiguration(configuration: Configuration): Observable<Configuration> {
      console.log("configuration : ",configuration)
      return this.http.put<Configuration>(`${this.baseUrl}/updateConfiguration/${configuration.id_config}`, configuration);
    }
  
    getConfigurationById(configuration_id: number): Observable<Configuration> {
      return this.http.get<Configuration>(`${this.baseUrl}/getConfiguration/${configuration_id}`);
    }
    deleteConfiguration(configuration_id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/deleteConfiguration/${configuration_id}`);   
    }
}
