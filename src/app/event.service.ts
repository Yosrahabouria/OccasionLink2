import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  createUser(user: any): Observable<any> {
    return this.http.post('/api/users', user);
  }
}
