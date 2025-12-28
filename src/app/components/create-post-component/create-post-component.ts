import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../../services/post-service';
import { IPost } from '../../models/ipost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-component',
  imports: [ReactiveFormsModule],
  templateUrl: './create-post-component.html',
  styleUrl: './create-post-component.css',
})
export class CreatePostComponent {
  isFormSubmitting = signal(false);

  // Services
  private readonly postService = inject(PostService);
  private readonly router = inject(Router);

  // Define form
  createPostForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  // Form submit handler
  onSubmit = () => {
    this.isFormSubmitting.set(true);

    const formData = this.createPostForm.value;

    const payload: IPost = {
      id: 0,
      title: formData.title || '',
      body: formData.body || '',
      userId: 0,
    };

    this.postService.createPost(payload).subscribe({
      next: (res) => {
        this.isFormSubmitting.set(false);
        alert('Post created!');
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        console.error(err);
        this.isFormSubmitting.set(false);
      },
    });
  };
}
