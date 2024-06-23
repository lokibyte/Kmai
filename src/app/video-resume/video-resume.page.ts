import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService,StepModel } from '../shared/services/utility.service';
import { Router } from '@angular/router';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions,CaptureVideoOptions}  from '@awesome-cordova-plugins/media-capture/ngx'
import { Capacitor } from '@capacitor/core';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-video-resume',
  templateUrl: './video-resume.page.html',
  styleUrls: ['./video-resume.page.scss'],
})
export class VideoResumePage implements OnInit {
  /*
  this.currentcard values 
  1 => Insturctions
  2 => Personal Details
  3 => Education/Experience - Stop prvious video &  
  4 => Skill set
  5 => Extra Info
  */
  
  currentcard = 1;
  introductioncard = true;
  personalcard = false;
  educationcard = false;
  skillcard = false;
  extracard = false;

  constructor(public mediaCapture: MediaCapture,public router: Router,private utility:UtilityService,private toastController: ToastController,) {}
  ionViewDidEnter(){
    // let url = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";
    // this.recordedVideo = document.getElementById('personal-recorded') as HTMLVideoElement;
    // this.recordedVideo.src = Capacitor.convertFileSrc(url);
  }
  ngOnInit() {

  }
  
  prevClick(prevcard:string){
    // console.info("prevClick",prevcard,this.currentcard);
    if(this.currentcard==1){
      this.introductioncard = false
    }else if(this.currentcard==2){
      console.info("personalcard3");
      this.personalcard =false;
    }else if(this.currentcard==3){
      this.educationcard =false;
      console.info("educationcard3");
    }else if(this.currentcard==5){
      console.info("extracard3");
      this.extracard =false;
    }else if(this.currentcard==4){
      console.info("skillcard3");
      this.skillcard =false;
    }
    this.currentcard--;
  }
  nextClick(nextcard:string){
    // console.info("nextClick",nextcard);
    // this.currentcard = nextcard;
    this.currentcard++;
    // console.info("nextcard2",this.currentcard);
    
    if(this.currentcard==1){
      this.introductioncard = true
    }else if(this.currentcard==2){
      this.personalcard =true;
    }else if(this.currentcard==3){
      this.educationcard =true;
      
    }else if(this.currentcard==4){
      this.skillcard =true;
      
    }else if(this.currentcard==5){
      this.extracard =true;
      
    }
    
  }
  submitClick(){
    console.info("submitClick",this.currentcard);
    if(this.utility.getfromlocation() =='register'){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/home/profile']);
    }
    
  }
  doPreview(){
    this.presentToast('top',"Preview Video development is in Progress....");  
  }
  doSave(){
    this.presentToast('top',"Save Video development is in Progress....");
  }
  async presentToast(position: 'top' | 'middle' | 'bottom',message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color:'danger'
    });

    await toast.present();
  }
}
