import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selectedTab = 'home';
  constructor() {}
  tabChanged(event: any) {
    this.selectedTab = event.tab;
  }
}
