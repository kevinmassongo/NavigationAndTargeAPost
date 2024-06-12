import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API = 'http://localhost:3000/posts'

  private http = inject(HttpClient)

  getPosts() {
    return this.http.get<Post[]>(`${this.API}`)
  }

  putPost ( postId : number, post : Post) {
    return this.http.put<Post>(`${this.API}/${postId}`, post)
  }
  
}
