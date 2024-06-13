import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions}  from '@awesome-cordova-plugins/media-capture/ngx'
import { Capacitor } from '@capacitor/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-vid-personal',
  templateUrl: './vid-personal.component.html',
  styleUrls: ['./vid-personal.component.scss'],
})
export class VidPersonalComponent  implements OnInit {
  
  urlpersonalVideo=''
  personalVideo:any;
  // urlpersonalVideo = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
  constructor(public mediaCapture: MediaCapture,private loader:LoaderService,private toast:ToastController) { }

  ngOnInit() {
    this.loader.showLoader("Loading...");
    
    
    setTimeout(()=>{
      let vid = document.getElementById('personal-recorded') as HTMLVideoElement;
      this.urlpersonalVideo = Capacitor.convertFileSrc(localStorage.getItem('personalvideo') || this.urlpersonalVideo)
      this.personalVideo = vid;
      console.info("ngOnInit-personal",this.urlpersonalVideo);
      if(this.urlpersonalVideo.length > 0){
        this.personalVideo.load();
      
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
    },400)
    // console.info("vid",vid);
  }
  
  ionViewDidEnter(){
    console.info("ionViewDidEnter-personal");
  }
  recordPersonalVideo(){
    console.info("recordPersonalVideo");
    let me = this;
    let options: CaptureVideoOptions = { duration: 30,cameraDirection:1 } //3mins
		    this.mediaCapture.captureVideo(options)
		    .then(
		      (data:any) => {
            // console.log(data);
            me.urlpersonalVideo = Capacitor.convertFileSrc(data[0].fullPath);
            localStorage.setItem('personalvideo',data[0].fullPath);
          },
		      (err) => console.error(err)
		    );
  }
  async playVideo(){
    console.info("playVideo");
    await this.personalVideo.load();
    
    setTimeout(async ()=>{
      await this.personalVideo.play();
    },2000)
  }
  
  stopVideo(){
   console.info("stopVideo");
   this.personalVideo.pause();
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
