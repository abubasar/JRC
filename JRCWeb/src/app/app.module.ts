import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

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
import { TestComponent } from './test/test.component';

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
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule
  ],
  providers: [
    BaseService,
    UrlService,
    ArticleService,
    CategoryService,
    TagService,
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
