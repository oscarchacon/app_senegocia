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

  getPosts(): Observable<any[]> {
    return this.get('posts').pipe(map(res => res));
  }

  addNewPost(Post: any): Observable<any> {
    return this.post('posts', Post).pipe(map(res => res));
  }

}
