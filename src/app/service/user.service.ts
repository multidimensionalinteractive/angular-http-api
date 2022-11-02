import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}people/`);
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}people/1`);
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}people/`, user);
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}people/${user.name}`, user);
  }

}
