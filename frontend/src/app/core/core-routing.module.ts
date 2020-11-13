import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { PostsComponent } from '../core/posts/posts.component';
import { PostDetailsComponent } from '../core/post-details/post-details.component';
import { AddComponent } from '../core/posts/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'posts/add',
        component: AddComponent,
      },
      {
        path: 'posts/:id',
        component: PostDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
