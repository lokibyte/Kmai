import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { FiltersComponent } from '../shared/components/filters/filters.component';
@Component({
  selector: 'app-searchjob',
  templateUrl: './searchjob.page.html',
  styleUrls: ['./searchjob.page.scss'],
})
export class SearchjobPage implements OnInit {

  searchInput = new Subject<string>();
  jobcategoeis = [
    {
      id:1,
      name:'Tele calling/Customer Support',
      logo:'help-desk.svg'
    },
    {
      id:2,
      name:'Driver',
      logo:'driver.svg'
    },
    {
      id:3,
      name:'Construction',
      logo:'architect.svg'
    },
    {
      id:4,
      name:'Delivery',
      logo:'delivery-man.svg'
    },
    {
      id:5,
      name:'House Help',
      logo:'assistance.svg'
    },
    {
      id:6,
      name:'Manufacturing',
      logo:'factory.svg'
    },
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onSearchInputChange(evt: any) {
    let _search = evt.target.value;
    this.searchInput.next(_search);
  }
  doSearchVoiceAction(){
    console.info("doSearchVoiceAction");
  }
  
  async doFilterAction(){
    console.info("doFilterAction");
    const modal = await this.modalCtrl.create({
      component: FiltersComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}