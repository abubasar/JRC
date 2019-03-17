import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'list',component:ListArticleComponent},
  {path:'add',component:AddArticleComponent},
  {path:'detail/:id',component:ArticleDetailComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
