import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('/server/api/post');
  }

  getPost(id: number) {
    return this.http.get('/server/api/post/' + id);
  }

  createPost(post: any) {
    let body = JSON.stringify(post);
    return this.http.post('/server/api/post', body, httpOptions);
  }
}
