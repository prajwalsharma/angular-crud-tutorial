import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IPost } from '../models/ipost';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post-service';
import { LoaderComponent } from '../components/loader-component/loader-component';

@Component({
  selector: 'app-edit-post-component',
  imports: [ReactiveFormsModule, LoaderComponent],
  templateUrl: './edit-post-component.html',
  styleUrl: './edit-post-component.css',
})
export class EditPostComponent {
  isFormSubmitting = signal(false);
  post = signal<IPost | null>(null);
  currentRoute = inject(ActivatedRoute);
  router = inject(Router);
  postService = inject(PostService);

  constructor() {
    const postId = Number(this.currentRoute.snapshot.paramMap.get('id'));

    this.postService.getPost(postId).subscribe({
      next: (res) => {
        this.post.set(res);

        this.editPostForm.patchValue({
          title: res?.title,
          body: res?.body,
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  editPostForm = new FormGroup({
    title: new FormControl(),
    body: new FormControl(),
  });

  onSubmit = () => {
    this.isFormSubmitting.set(true);

    const payload: IPost = {
      title: this.post()?.title || '',
      body: this.post()?.body || '',
      id: this.post()?.id || 0,
      userId: this.post()?.userId || 0,
    };

    this.postService.updatePost(payload).subscribe({
      next: (res) => {
        alert('Post updated!');
        this.isFormSubmitting.set(false);
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        console.error(err);
        this.isFormSubmitting.set(false);
      },
    });
  };
}
