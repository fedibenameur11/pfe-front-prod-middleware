import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/Models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl : string = 'http://192.168.37.129/api/project';

  constructor(private http: HttpClient) { }
  findAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl + '/list');
  }

  addProject(project : Project): Observable<Project>{
    return this.http.post<Project>(this.baseUrl + '/addProject',project);
  }
  updateProject(project: Project): Observable<Project> {
    console.log("project : ",project)
    return this.http.put<Project>(`${this.baseUrl}/updateProject/${project.id_project}`, project);
  }

  getProjectById(project_id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/getProject/${project_id}`);
  }
  deleteProject(project_id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteProject/${project_id}`);   
  }

  
}

