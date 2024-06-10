import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-landing',
  templateUrl: './video-landing.page.html',
  styleUrls: ['./video-landing.page.scss'],
})
export class VideoLandingPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  goToHome(){
    
    localStorage.setItem('isLoggedin','true');
    localStorage.removeItem('userreg');
    this.router.navigate(['/home']);  
  }
  goTorecordVideo(){
    this.router.navigate(['/video-resume']);  
  }
}
