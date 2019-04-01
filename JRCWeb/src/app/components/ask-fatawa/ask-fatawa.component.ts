import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { FatawaService } from 'src/app/services/fatawa.service';
import { Fatawa } from 'src/app/entities/fatawa';

@Component({
  selector: 'app-ask-fatawa',
  templateUrl: './ask-fatawa.component.html',
  styleUrls: ['./ask-fatawa.component.scss']
})
export class AskFatawaComponent implements OnInit {

  model:Fatawa
  constructor(private service:FatawaService) { 
   this.model=new Fatawa();
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
   this.model=new Fatawa();
 }
}
