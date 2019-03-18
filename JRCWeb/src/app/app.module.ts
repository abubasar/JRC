import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ListArticleComponent,
    ArticleDetailComponent,
    NavComponent,
    ContactComponent,
    AskFatawaComponent,
    ListFatawaComponent
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
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
