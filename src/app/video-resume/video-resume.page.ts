import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService,StepModel } from '../shared/services/utility.service';
import { Router } from '@angular/router';
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
  constructor(private utility:UtilityService,public router: Router) { }

  ngOnInit() {
    
  }
  nextClick(nextcard:string){
    console.info("nextClick",nextcard);
    // this.currentcard = nextcard;
    this.currentcard++;
    console.info("nextcard2",this.currentcard);
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
  
  prevClick(prevcard:string){
    console.info("prevClick",prevcard);
    if(this.currentcard==1){
      this.introductioncard = false
    }else if(this.currentcard==2){
      this.personalcard =false;
    }else if(this.currentcard==3){
      this.educationcard =false;
    }else if(this.currentcard==5){
      this.extracard =false;
    }else if(this.currentcard==4){
      this.skillcard =false;
    }
    this.currentcard--;

  }
  submitClick(){
    console.info("submitClick",this.currentcard);
    this.router.navigate(['/home']); 

  }
  playVideo(){
    console.info("playVideo()",this.currentcard);
  }
  
  stopVideo(){
    console.info("stopVideo()",this.currentcard);
  }
  
  recordPersonalVideo(){
    console.info("recordPersonalVideo");
  }
  recordEducationVideo(){
    console.info("recordEducationVideo");
  }

  recordSkillVideo(){
    console.info("recordSkillVideo");
  }
  recordExtraInfoVideo(){
    console.info("recordExtraInfoVideo");
  }
}
