import { Component, OnInit } from '@angular/core';
import { FatawaService } from 'src/app/services/fatawa.service';

import { BaseComponent } from '../base/base.component';
import { Entity } from 'src/app/entities/entity';

@Component({
  selector: 'app-ask-fatawa',
  templateUrl: './ask-fatawa.component.html',
  styleUrls: ['./ask-fatawa.component.scss']
})
export class AskFatawaComponent extends BaseComponent<any> implements OnInit {


  constructor(public service:FatawaService) { 
    super(service)
 
  }

  ngOnInit() {
  }

 
 reset(){
   this.model=new Entity();
 }
}
