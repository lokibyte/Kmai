import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrls: ['./workexp.component.scss'],
})
export class WorkexpComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
  save(){
    this.modalCtrl.dismiss();
  }
}
