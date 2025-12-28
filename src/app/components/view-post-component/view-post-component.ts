import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '../../models/ipost';
import { PostService } from '../../services/post-service';
import { LoaderComponent } from '../loader-component/loader-component';

@Component({
  selector: 'app-view-post-component',
  imports: [LoaderComponent],
  templateUrl: './view-post-component.html',
  styleUrl: './view-post-component.css',
})
export class ViewPostComponent {
  // Properties
  postId = signal(0);
  post = signal<IPost | null>(null);

  // Services
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);

  constructor() {
    // Get id from route URL
    const id = Number(this.route.snapshot.paramMap.get('id')) || 0;

    if (id > 0) {
      this.postService.getPost(id).subscribe({
        next: (res) => {
          this.postId.set(id);
          this.post.set(res);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }

    // effect(() => {
    //   if (this.postId() > 0) {
    //     this.postService.getPost(this.postId()).subscribe({
    //       next: (res) => {
    //         this.post.set(res);
    //       },
    //       error: (err) => {
    //         console.error(err);
    //       },
    //     });
    //   }
    // });
  }
}
