import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Comment } from '../types/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  getComments(postId: number): Observable<Comment[]>{
    const newUrl = this.url + `/${postId}/comments`;
    return this.http.get<Comment[]>(newUrl);
  }
}
