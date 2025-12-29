import { Component } from '@angular/core';
import { CreatePostComponent } from '../../components/create-post-component/create-post-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-post-page',
  imports: [CreatePostComponent, RouterLink],
  templateUrl: './create-post-page.html',
  styleUrl: './create-post-page.css',
})
export class CreatePostPage {}
