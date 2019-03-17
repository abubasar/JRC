import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.sass']
})
export class ListArticleComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(service:ArticleService) {
    super(service)
   }

  ngOnInit() {
    this.search();
  }

}
