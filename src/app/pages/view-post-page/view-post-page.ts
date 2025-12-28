import { Component } from '@angular/core';
import { ViewPostComponent } from '../../components/view-post-component/view-post-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-post-page',
  imports: [ViewPostComponent, RouterLink],
  templateUrl: './view-post-page.html',
  styleUrl: './view-post-page.css',
})
export class ViewPostPage {}
