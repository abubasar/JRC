import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';

import { AuthGuard } from './auth.guard';
import { AskFatawaComponent } from './components/ask-fatawa/ask-fatawa.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'/list',
  pathMatch:'full'
    },
    {path:'log',component:TestComponent},
  {path:'list',component:ListArticleComponent},
  {path:'add',component:AddArticleComponent,canActivate:[AuthGuard]},
  {path:'detail/:id',component:ArticleDetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:AskFatawaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
