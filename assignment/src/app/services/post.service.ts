import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/Post';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  API: string = 'http://localhost:8080/api/posts';
  accessToken: string = ''; 
  constructor(private http: HttpClient , private authService: AuthService) {}
  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.API}`);
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
  }

  getCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.API}/${id}`);
  }
  removeCategory(id: string): Observable<any> {
    const accessToken = this.authService.getAccessToken(); // Lấy accessToken từ AuthService
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.http.delete<any>(`${this.API}/${id}`,{headers});
  }
  createCategory(post: any): Observable<any> {
    const accessToken = this.authService.getAccessToken(); // Lấy accessToken từ AuthService
    const headers = new HttpHeaders().set('Authorization', `Bearer ${accessToken}`);
    return this.http.post(`${this.API}`,post,{ headers } );
  }
  updateCategory(post: any,id:any,  accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    });
    return this.http.put(`${this.API}/${id}`, post, { headers } );
  }
}
