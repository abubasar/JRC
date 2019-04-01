import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';

import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { BaseService } from './services/base.service';
import { UrlService } from './services/url.service';
import { ArticleService } from './services/article.service';
import { CategoryService } from './services/category.service';
import { TagService } from './services/tag.service';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { AskFatawaComponent } from './components/ask-fatawa/ask-fatawa.component';
import { ListFatawaComponent } from './components/list-fatawa/list-fatawa.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './components/admin/admin.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AddTagComponent } from './components/tag/add-tag/add-tag.component';
import { EditTagComponent } from './components/tag/edit-tag/edit-tag.component';
import { TagListComponent } from './components/tag/tag-list/tag-list.component';
import { AddAuthorComponent } from './components/author/add-author/add-author.component';
import { EditAuthorComponent } from './components/author/edit-author/edit-author.component';
import { AuthorListComponent } from './components/author/author-list/author-list.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { AllArticleComponent } from './components/all-article/all-article.component';
import { FatawaService } from './services/fatawa.service';
import { AddFatawaAnswerComponent } from './components/add-fatawa-answer/add-fatawa-answer.component';
import { EditFatawaAnswerComponent } from './components/edit-fatawa-answer/edit-fatawa-answer.component';
import { ListFatawaAnswerComponent } from './components/list-fatawa-answer/list-fatawa-answer.component';
import { FatawaAnswerService } from './services/fatawa-answer.service';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ListArticleComponent,
    ArticleDetailComponent,
    NavComponent,
    ContactComponent,
    AskFatawaComponent,
    ListFatawaComponent,
    LoginComponent,
    AdminComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    CategoryListComponent,
    AddTagComponent,
    EditTagComponent,
    TagListComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    AuthorListComponent,
    EditArticleComponent,
    AllArticleComponent,
    AddFatawaAnswerComponent,
    EditFatawaAnswerComponent,
    ListFatawaAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    OwlModule 

  ],
  providers: [
    BaseService,
    UrlService,
    ArticleService,
    CategoryService,
    TagService,
    FatawaService,
    FatawaAnswerService,
    AuthGuard,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
