import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoResumePage } from './video-resume.page';

const routes: Routes = [
  {
    path: '',
    component: VideoResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoResumePageRoutingModule {}
