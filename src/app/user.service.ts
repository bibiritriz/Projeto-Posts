import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<User>{
    const newUrl = this.url + `/${userId}`;
    return this.http.get<User>(newUrl);
  } 
}
