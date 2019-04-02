import { FatawaService } from './../../services/fatawa.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-asked-fatawa',
  templateUrl: './asked-fatawa.component.html',
  styleUrls: ['./asked-fatawa.component.scss']
})
export class AskedFatawaComponent extends BaseComponent<any> implements OnInit {
  reset() {
    throw new Error("Method not implemented.");
  }

  constructor(public service:FatawaService) {
    super(service);
   }

  ngOnInit() {
    this.search();
    this.searchForPaging();
  }

}
