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

  //model:Fatawa
  constructor(public service:FatawaService) { 
    super(service)
  // this.model=new Fatawa();
  }

  ngOnInit() {
  }

 addFatawa(){
   this.service.addFatawa(this.model).subscribe(res=>{
     this.reset();
     console.log(res);
   })
 }
 reset(){
   this.model=new Entity();
 }
}
