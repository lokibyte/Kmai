import { Component, OnInit } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions}  from '@awesome-cordova-plugins/media-capture/ngx'
import { Capacitor } from '@capacitor/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vid-educational',
  templateUrl: './vid-educational.component.html',
  styleUrls: ['./vid-educational.component.scss'],
})
export class VidEducationalComponent  implements OnInit {

  urleducationVideo='';
  educationVideo:any;
  constructor(public mediaCapture: MediaCapture,private loader:LoaderService,private toast:ToastController) { }

  ngOnInit() {
    this.loader.showLoader("Loading...");
     
    
    let vid = document.getElementById('education-recorded') as HTMLVideoElement;
    this.urleducationVideo = Capacitor.convertFileSrc(localStorage.getItem('eduvideo') || "")
    this.educationVideo = vid;
    console.info("ngOnInit-educational",this.urleducationVideo);
    if(this.urleducationVideo.length > 0){
      this.educationVideo.load();

    vid!.onloadeddata = ()=>{
      // alert("Browser has loaded the current frame");
      this.loader.hideLoader();
    };
    vid.onerror = ()=> {
      this.showToast();
      // this.educationVideo.load();
    };
    }
    
    setTimeout(()=>{
      this.loader.hideLoader();
    },4000);
    
  }

  recordEducationVideo(){
    console.info("recordEducationVideo");
    let me = this;
    let options: CaptureVideoOptions = { duration: 30 } //3mins
		    this.mediaCapture.captureVideo(options)
		    .then(
		      (data:any) => {
            // console.log(data);
            me.urleducationVideo = Capacitor.convertFileSrc(data[0].fullPath);
            localStorage.setItem('eduvideo',data[0].fullPath);
          },
		      (err) => console.error(err)
		    );
  }
  async playVideo(){
    console.info("playVideo");
    await this.educationVideo.load();
    
    setTimeout(async ()=>{
      await this.educationVideo.play();
    },2000)
  }
  
  stopVideo(){
   console.info("stopVideo");
   this.educationVideo.pause();
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
