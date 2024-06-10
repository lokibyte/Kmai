import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LangaugeService } from '../../services/langauge.service';
@Component({
  selector: 'app-langaugeselector',
  templateUrl: './langaugeselector.component.html',
  styleUrls: ['./langaugeselector.component.scss'],
})
export class LangaugeselectorComponent  implements OnInit {
  btntitle:string='';
  languageselected: string = 'en';
  showCloseIcon:boolean;

  constructor(private modalCtrl: ModalController,private langaugeService:LangaugeService) {
    console.info("modla construcotr");
    this.languageselected = localStorage.getItem("languageselected") || 'en';
  }

  ngOnInit() {}
  close(){
    this.modalCtrl.dismiss();
  }
  confirm() {
    localStorage.setItem("languageselected",this.languageselected)
    return this.modalCtrl.dismiss(this.languageselected, 'confirm');
  }
  onLanguageChange(e:any){
    this.languageselected = e.target.value;
    // this._translate.use(this.languageselected);
    console.info(this.languageselected);
    this.langaugeService.setLanguage(this.languageselected);
  }
}
