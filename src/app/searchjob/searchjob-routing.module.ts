import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchjobPage } from './searchjob.page';

const routes: Routes = [
  {
    path: '',
    component: SearchjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchjobPageRoutingModule {}
