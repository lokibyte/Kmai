import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { WorkexpComponent } from '../shared/components/workexp/workexp.component';
import { AddlangugeComponent } from '../shared/components/addlanguge/addlanguge.component';
import { AddcertificateComponent } from '../shared/components/addcertificate/addcertificate.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
    console.info("ngOnInit");
  }
  
  recordideoResume(){
    console.info("recordideoResume");
    this.router.navigate(['/video-landing']);
  }
  goToSettings(){
    this.router.navigate(['/home/settings']);
  }

  async addWorkExperience(){
    const modal = await this.modalCtrl.create({
      component: WorkexpComponent,
      mode:'md'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
  
  async addLanguage(){
    const modal = await this.modalCtrl.create({
      component: AddlangugeComponent,
      mode:'md'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
  
  async addCertificate(){
    const modal = await this.modalCtrl.create({
      component: AddcertificateComponent,
      mode:'md'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
  
  async addSkills(){
    const modal = await this.modalCtrl.create({
      component: SkillsComponent,
      mode:'md'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }

}
