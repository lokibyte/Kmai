import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loader:any = null

  constructor(public loadingController: LoadingController) { }
  
  async showLoader(msg?:string){
    this.loader = await this.loadingController.create({
      spinner:'bubbles',
      cssClass: 'custom-loading',
      message: msg || 'Please wait...'
    });
    await this.loader.present();

    const { role, data } = await this.loader.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async hideLoader(){
    setTimeout(async ()=>{
      await this.loader.dismiss();
    },200)
  }

}
