import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoLandingPageRoutingModule } from './video-landing-routing.module';

import { VideoLandingPage } from './video-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoLandingPageRoutingModule
  ],
  declarations: [VideoLandingPage]
})
export class VideoLandingPageModule {}
