import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  
  constructor(private toast:ToastController) { 
    Network.addListener('networkStatusChange', status => {
      const {connected, connectionType} = status;
      console.log('Network status changed', status);
      if(!connected){
        this.showToast();
      }
    });
  }

  getCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    const {connected, connectionType} = status;
    console.log('Network status:', status);
    return status;
  };

  async showToast(){
    const toast = await this.toast.create({
        message: 'Network offline,Please check your internet connection.',
        duration: 1500,
        position: 'top',
        color:'danger'
      });
  
      await toast.present();
    }
  
}
