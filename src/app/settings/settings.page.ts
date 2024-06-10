import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../shared/services/utility.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public router: Router,private utility:UtilityService) { }

  ngOnInit() {
    console.info("ngOnInit");
  }

  goBack(){
    this.router.navigate(['/home/profile']);
  }
  doSignOut(){
    this.utility.userLoggedin = false;
    localStorage.setItem('isLoggedin','false');
    this.router.navigate(['/landing']);
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },1000);
    
  }
}
