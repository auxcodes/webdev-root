import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostsComponent } from './pages/blog-posts/blog-posts.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { SitesComponent } from './pages/sites/sites.component';


const routes: Routes = [
  { path: '', component: SitesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
