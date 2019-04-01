import { ListFatawaComponent } from './components/list-fatawa/list-fatawa.component';
import { ListFatawaAnswerComponent } from './components/list-fatawa-answer/list-fatawa-answer.component';
import { AddFatawaAnswerComponent } from './components/add-fatawa-answer/add-fatawa-answer.component';
import { AllArticleComponent } from './components/all-article/all-article.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { EditAuthorComponent } from './components/author/edit-author/edit-author.component';
import { AddAuthorComponent } from './components/author/add-author/add-author.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';

import { AuthGuard } from './auth.guard';
import { AskFatawaComponent } from './components/ask-fatawa/ask-fatawa.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AddTagComponent } from './components/tag/add-tag/add-tag.component';
import { EditTagComponent } from './components/tag/edit-tag/edit-tag.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { EditFatawaAnswerComponent } from './components/edit-fatawa-answer/edit-fatawa-answer.component';



const routes: Routes = [
  {
  path:'',
  redirectTo:'/list',
  pathMatch:'full'
    },
  {path:'list',component:ListArticleComponent},
  {path:'add',component:AddArticleComponent,canActivate:[AuthGuard]},
  {path:'detail/:id',component:ArticleDetailComponent},
  {path:'contact',component:ContactComponent},
  {path:'admin',component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'edit-article/:id',component:EditArticleComponent},
  {path:'add-tag',component:AddTagComponent},
  {path:'edit-tag/:id',component:EditTagComponent},
  {path:'tag-list',component:TagListComponent},
  {path:'add-author',component:AddAuthorComponent},
  {path:'edit-author/:id',component:EditAuthorComponent},
  {path:'author-list',component:AuthorListComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'edit-category/:id',component:EditCategoryComponent},
  {path:'category-list',component:CategoryListComponent},
  {path:'article',component:AllArticleComponent},
  {path:'fatawa',component:AskFatawaComponent},
  {path:'list-fatawa',component:ListFatawaComponent},
  {path:'add-fatawa-answer',component:AddFatawaAnswerComponent},
  {path:'edit-fatawa-answer/:id',component:EditFatawaAnswerComponent},
  {path:'list-fatawa-answer',component:ListFatawaAnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
