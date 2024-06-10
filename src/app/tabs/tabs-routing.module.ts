import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage, 
    children: [
      {
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'searchjob',
        loadChildren: () => import('../searchjob/searchjob.module').then( m => m.SearchjobPageModule)
      },
      {
        path: 'bookmark',
        loadChildren: () => import('../bookmark/bookmark.module').then( m => m.BookmarkPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'jobdetail',
        loadChildren: () => import('../jobdetail/jobdetail.module').then( m => m.JobdetailPageModule)
      },
      {
        path: 'recomended-jobs',
        loadChildren: () => import('../recomended-jobs/recomended-jobs.module').then( m => m.RecomendedJobsPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
