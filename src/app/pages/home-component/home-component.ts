import { Component } from '@angular/core';
import { PostListComponent } from '../../components/post-list-component/post-list-component';

@Component({
  selector: 'app-home-component',
  imports: [PostListComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {}
