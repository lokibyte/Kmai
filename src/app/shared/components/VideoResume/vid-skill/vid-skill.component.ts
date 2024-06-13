import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions}  from '@awesome-cordova-plugins/media-capture/ngx'
import { Capacitor } from '@capacitor/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vid-skill',
  templateUrl: './vid-skill.component.html',
  styleUrls: ['./vid-skill.component.scss'],
})
export class VidSkillComponent  implements OnInit {

  urlskillVideo='';
  skillVideo:any;
  constructor(public mediaCapture: MediaCapture,private loader:LoaderService,private toast:ToastController) { }

  ngOnInit() {
    this.loader.showLoader("Loading...");
    
    
    let vid = document.getElementById('skill-recorded') as HTMLVideoElement;
    this.urlskillVideo = Capacitor.convertFileSrc(localStorage.getItem('skillvideo') || "")
    this.skillVideo = vid;
    console.info("ngOnInit-skill",this.urlskillVideo);
    if(this.urlskillVideo.length > 0){
      this.skillVideo.load();
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

  recordSkillVideo(){
    console.info("recordSkillVideo");
    let me = this;
    let options: CaptureVideoOptions = { duration: 30 } //3mins
		    this.mediaCapture.captureVideo(options)
		    .then(
		      (data:any) => {
            // console.log(data);
            me.urlskillVideo = Capacitor.convertFileSrc(data[0].fullPath);
            localStorage.setItem('skillvideo',data[0].fullPath);
          },
		      (err) => console.error(err)
		    );
  }
  async playVideo(){
    console.info("playVideo");
    await this.skillVideo.load();
    setTimeout(async ()=>{
      await this.skillVideo.play();
    },2000);
    
  }
  
  stopVideo(){
   console.info("stopVideo");
   this.skillVideo.pause();
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
