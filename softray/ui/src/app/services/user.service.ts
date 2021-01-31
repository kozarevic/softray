import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('/server/api/user');
  }

  getUser(id: number) {
    return this.http.get('/server/api/user/' + id);
  }

  createUser(user: any) {
    let body = JSON.stringify(user);
    return this.http.post('/server/api/user', body, httpOptions);
  }
}
