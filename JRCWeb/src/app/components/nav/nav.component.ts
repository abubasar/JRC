import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {


  constructor() {
    
   }

  ngOnInit() {
  }

}
