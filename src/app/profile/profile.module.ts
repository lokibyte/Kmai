import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { WorkexpComponent } from '../shared/components/workexp/workexp.component';
import { AddlangugeComponent } from '../shared/components/addlanguge/addlanguge.component';
import { AddcertificateComponent } from '../shared/components/addcertificate/addcertificate.component';
import { SkillsComponent } from '../shared/components/skills/skills.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [
    ProfilePage,
    WorkexpComponent,
    AddlangugeComponent,
    AddcertificateComponent,
    SkillsComponent
  ]
})
export class ProfilePageModule {}
