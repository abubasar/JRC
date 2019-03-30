import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
model:any
  constructor() { }

  ngOnInit() {
  }
 mySlideImages = [1,2,3].map((i)=> `https://picsum.photos/640/480?image=${i}`);
myCarouselImages =[1,2,3,4,5,6].map((i)=>`https://picsum.photos/640/480?image=${i}`);
mySlideOptions={items: 1, dots: true, nav: false};
myCarouselOptions={items: 3, dots: true, nav: true};

}
