import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendedJobsPage } from './recomended-jobs.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendedJobsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendedJobsPageRoutingModule {}
