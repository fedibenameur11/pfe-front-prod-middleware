import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl : string = 'http://192.168.37.129/api/user';

  constructor(private http: HttpClient) { }
  findAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + '/list');
  }

  addUser(user : User): Observable<User>{
    return this.http.post<User>(this.baseUrl + '/addUser',user);
  }
  updateUser(user: User): Observable<User> {
    console.log("user : ",user)
    return this.http.put<User>(`${this.baseUrl}/updateUser/${user.id_user}`, user);
  }

  getUserById(user_id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getUser/${user_id}`);
  }
  deleteUser(user_id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteUser/${user_id}`);   
  }

  
}
