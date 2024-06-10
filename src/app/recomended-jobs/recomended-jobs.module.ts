import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendedJobsPageRoutingModule } from './recomended-jobs-routing.module';

import { RecomendedJobsPage } from './recomended-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendedJobsPageRoutingModule
  ],
  declarations: [RecomendedJobsPage]
})
export class RecomendedJobsPageModule {}
