import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoResumePageRoutingModule } from './video-resume-routing.module';

import { VideoResumePage } from './video-resume.page';

import { VidIntroComponent } from '../shared/components/VideoResume/vid-intro/vid-intro.component';
import { VidPersonalComponent } from '../shared/components/VideoResume/vid-personal/vid-personal.component';
import { VidEducationalComponent } from '../shared/components/VideoResume/vid-educational/vid-educational.component';
import { VidSkillComponent } from '../shared/components/VideoResume/vid-skill/vid-skill.component';
import { VidExtraInfoComponent } from '../shared/components/VideoResume/vid-extra-info/vid-extra-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoResumePageRoutingModule
  ],
  declarations: [
    VideoResumePage,
    VidIntroComponent,
    VidPersonalComponent,
    VidEducationalComponent,
    VidSkillComponent,
    VidExtraInfoComponent
  ]
})
export class VideoResumePageModule {}
