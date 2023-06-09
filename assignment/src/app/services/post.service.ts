import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  API: string = 'http://localhost:8080/api/posts';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.API}`);
  }
  getCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }
  removeCategory(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }
  createCategory(post: any): Observable<any> {
    return this.http.post(`${this.API}`, post);
  }
  updateCategory(id: string, post: any): Observable<any> {
    return this.http.put(`${this.API}/${id}`, post);
  }
}
