import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {LangaugeselectorComponent} from '../shared/components/langaugeselector/langaugeselector.component'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  language = 'en';
  constructor(public router: Router,private modalCtrl: ModalController) {

   }

  ngOnInit() {
    console.info("ngoninit");
  }
  
  async openChooseLangModal(){
    console.info("openChooseLangModal()")
    // this.router.navigate(['/langauge']);
    const modal = await this.modalCtrl.create({
      component: LangaugeselectorComponent,
      mode:'md',
      componentProps: {
        btntitle: 'Continue',
        showCloseIcon:false
      }
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },200); 
    
  }
  goToLoginPage(){
    console.info("goToLoginPage()");
    // this.router.navigate(['/login-phone']);
    this.openChooseLangModal();
  }
}
