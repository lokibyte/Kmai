import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addlanguge',
  templateUrl: './addlanguge.component.html',
  styleUrls: ['./addlanguge.component.scss'],
})
export class AddlangugeComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
  save(){
    this.modalCtrl.dismiss();
  }
}
