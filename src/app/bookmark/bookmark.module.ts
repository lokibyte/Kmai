import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarkPageRoutingModule } from './bookmark-routing.module';
import { SavedjobComponent } from '../shared/components/savedjob/savedjob.component';
import { AppliedjobComponent } from '../shared/components/appliedjob/appliedjob.component';
import { BookmarkPage } from './bookmark.page';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    IonicModule,
    BookmarkPageRoutingModule
    
  ],
  declarations: [BookmarkPage,SavedjobComponent,AppliedjobComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class BookmarkPageModule {}
