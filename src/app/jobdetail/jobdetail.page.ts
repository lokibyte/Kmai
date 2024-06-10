import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CompanyOverviewComponent } from '../shared/components/company-overview/company-overview.component';
@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.page.html',
  styleUrls: ['./jobdetail.page.scss'],
})
export class JobdetailPage implements OnInit {

  constructor(public router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  goBack(){
    console.info("goBack()");
    this.router.navigate(['/home/main'])
  }
  async companyOverView(){
    const modal = await this.modalCtrl.create({
      component: CompanyOverviewComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
