import { Routes } from '@angular/router';
import { App } from './app';
import { CreatePostPage } from './pages/create-post-page/create-post-page';
import { HomePage } from './pages/home-page/home-page';
import { ViewAllPostsPage } from './pages/view-all-posts-page/view-all-posts-page';
import { ViewPostPage } from './pages/view-post-page/view-post-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'posts/create',
    component: CreatePostPage,
  },
  {
    path: 'posts',
    component: ViewAllPostsPage,
  },
  {
    path: 'posts/:id',
    component: ViewPostPage,
  },
];
