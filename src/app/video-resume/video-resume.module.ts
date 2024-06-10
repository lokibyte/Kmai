import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoResumePageRoutingModule } from './video-resume-routing.module';

import { VideoResumePage } from './video-resume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoResumePageRoutingModule
  ],
  declarations: [VideoResumePage]
})
export class VideoResumePageModule {}
