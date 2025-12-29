import { Component, inject, signal } from '@angular/core';
import { EditPostComponent } from '../../edit-post-component/edit-post-component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-post-page',
  imports: [EditPostComponent, RouterLink],
  templateUrl: './edit-post-page.html',
  styleUrl: './edit-post-page.css',
})
export class EditPostPage {
  postId = signal(0);
  private route = inject(ActivatedRoute);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postId.set(id);
  }
}
