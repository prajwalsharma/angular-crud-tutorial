import { Component, inject, OnInit, signal } from '@angular/core';
import { IPost } from '../../models/ipost';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post-list-component',
  imports: [],
  templateUrl: './post-list-component.html',
  styleUrl: './post-list-component.css',
})
export class PostListComponent implements OnInit {
  posts = signal<IPost[]>([]);

  postService = inject(PostService);

  // Fetch posts on page load
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: (posts) => {
        this.posts.set(posts);
      },
      error: (err) => {
        console.log('Error while fetching posts...', err);
      },
    });
  }
}
