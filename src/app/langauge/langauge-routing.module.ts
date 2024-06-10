import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangaugePage } from './langauge.page';

const routes: Routes = [
  {
    path: '',
    component: LangaugePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LangaugePageRoutingModule {}
