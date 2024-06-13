import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions}  from '@awesome-cordova-plugins/media-capture/ngx'
import { Capacitor } from '@capacitor/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vid-extra-info',
  templateUrl: './vid-extra-info.component.html',
  styleUrls: ['./vid-extra-info.component.scss'],
})
export class VidExtraInfoComponent  implements OnInit {

  urlextrainfoVideo='';
  extrainfoVideo:any;
  constructor(public mediaCapture: MediaCapture,private loader:LoaderService,private toast:ToastController) { }

  ngOnInit() {
    this.loader.showLoader("Loading...");
    
    
    let vid = document.getElementById('extrainfo-recorded') as HTMLVideoElement;
    this.urlextrainfoVideo = Capacitor.convertFileSrc(localStorage.getItem('extrainfovideo') || "")
    this.extrainfoVideo = vid;
    console.info("ngOnInit-extra",this.urlextrainfoVideo);
    if(this.urlextrainfoVideo.length > 0){
      this.extrainfoVideo.load();
      vid!.onloadeddata = ()=>{
        // alert("Browser has loaded the current frame");
        this.loader.hideLoader();
      };
      vid.onerror = ()=> {
        this.showToast()
      };
    }
    
    setTimeout(()=>{
      this.loader.hideLoader();
    },4000);
  }

  recordExtraInfoVideo(){
    console.info("recordExtraInfoVideo");
    let me = this;
    let options: CaptureVideoOptions = { duration: 30 } //3mins
		    this.mediaCapture.captureVideo(options)
		    .then(
		      (data:any) => {
            // console.log(data);
            me.urlextrainfoVideo = Capacitor.convertFileSrc(data[0].fullPath);
            localStorage.setItem('extrainfovideo',data[0].fullPath);
          },
		      (err) => console.error(err)
		    );
  }
  async playVideo(){
    console.info("playVideo");
    await this.extrainfoVideo.load();
    
    setTimeout(async ()=>{
      await this.extrainfoVideo.play();
    },2000)
  }
  
  stopVideo(){
   console.info("stopVideo");
   this.extrainfoVideo.pause();
  }
  async showToast(){
    const toast = await this.toast.create({
        message: 'Error Loading Video, Please try again.',
        duration: 1500,
        position: 'top',
        color:'danger'
      });
  
      await toast.present();
    }
}
