import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoLandingPage } from './video-landing.page';

const routes: Routes = [
  {
    path: '',
    component: VideoLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoLandingPageRoutingModule {}
