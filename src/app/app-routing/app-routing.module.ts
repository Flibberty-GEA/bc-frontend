import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from '../homepage/homepage.component';
import { ArticlesComponent } from '../articles/articles.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'article/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
