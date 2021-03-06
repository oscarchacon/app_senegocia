import { Injectable } from '@angular/core';
import { BaseServiceService } from './base-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service1Service extends BaseServiceService{

  constructor(protected http: HttpClient) {
    super(http);
  }

  obtenerPosts(): Observable<any[]> {
    return this.get('posts').pipe(map(res => res));
  }

  agregarNuevoPost(Post: any): Observable<any> {
    return this.post('posts', Post).pipe(map(res => res));
  }

  eliminarPost(IdPost: number): Observable<any> {
    return this.delete(`posts/${IdPost}`).pipe(map(res => res));
  }

  editarPost(Post: any): Observable<any> {
    return this.put(`posts/${Post.id}`, Post).pipe(map(res => res));
  }

}
