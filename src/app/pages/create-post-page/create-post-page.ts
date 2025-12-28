import { Component } from '@angular/core';
import { CreatePostComponent } from '../../components/create-post-component/create-post-component';

@Component({
  selector: 'app-create-post-page',
  imports: [CreatePostComponent],
  templateUrl: './create-post-page.html',
  styleUrl: './create-post-page.css',
})
export class CreatePostPage {}
