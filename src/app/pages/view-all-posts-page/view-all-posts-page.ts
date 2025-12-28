import { Component } from '@angular/core';
import { PostListComponent } from '../../components/post-list-component/post-list-component';

@Component({
  selector: 'app-view-all-posts-page',
  imports: [PostListComponent],
  templateUrl: './view-all-posts-page.html',
  styleUrl: './view-all-posts-page.css',
})
export class ViewAllPostsPage {}
