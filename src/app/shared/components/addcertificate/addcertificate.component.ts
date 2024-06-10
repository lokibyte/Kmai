import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addcertificate',
  templateUrl: './addcertificate.component.html',
  styleUrls: ['./addcertificate.component.scss'],
})
export class AddcertificateComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
  save(){
    this.modalCtrl.dismiss();
  }
  loadImageFromDevice(evt:any){
    console.info(evt.target.files[0]);
  }
}
