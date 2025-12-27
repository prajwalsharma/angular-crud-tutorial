import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPost } from '../models/ipost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  getAllPosts = () => {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts`);
  };

  getPost = (postId: number) => {
    return this.http.get<IPost>(`${this.apiUrl}/posts/${postId}`);
  };

  createPost = (payload: IPost) => {
    return this.http.post<IPost>(`${this.apiUrl}/posts`, payload);
  };

  updatePost = (payload: IPost) => {
    return this.http.put<IPost>(`${this.apiUrl}/posts`, payload);
  };

  deletePost = (postId: number) => {
    return this.http.delete<void>(`${this.apiUrl}/posts/${postId}`);
  };
}
