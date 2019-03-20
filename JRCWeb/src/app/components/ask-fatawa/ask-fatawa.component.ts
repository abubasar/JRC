import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-ask-fatawa',
  templateUrl: './ask-fatawa.component.html',
  styleUrls: ['./ask-fatawa.component.scss']
})
export class AskFatawaComponent implements OnInit {

  model:User
  constructor(private _auth:AuthService,private _router:Router) { 
    this.model=new User();
  }

  ngOnInit() {
  }

  loginUser(){
   this._auth.loginUser(this.model)
   .subscribe(
    res=>{
      console.log(res)
      //jwt 3rd step:save that token in the browsers local storage
      localStorage.setItem('token',res.token)
      this._router.navigate(['list'])

    }, 
     err=>console.log(err)
   )
  }

}
