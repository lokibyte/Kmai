import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {
  issaved = true;
  isapplied = false;
  
  segment='saved';
  savedjobs:any[]= [];
  appliedjobs:any[]= [];
  constructor() { }

  ngOnInit() {
    this.savedjobs = [
      { id: 4, company: 'XYZ company', location: 'Pune, India', expires_on: '30/11/23', post: 'Garbage collector', type: 'Full Time',position:'Contractual', salary: '40k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.7',posted:'Just Now',hiring:'active' },
      { id: 4, company: 'ABC company', location: 'New Delhi, India', expires_on: '30/11/23', post: 'Electrician', type: 'Part Time',position:'Permanent', salary: '50k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' ,rating:'5.0',posted:'1 day ago',hiring:'active'},
      { id: 4, company: 'Test company', location: 'Hyderabad, India', expires_on: '30/11/23', post: 'Plumber', type: 'Part Time',position:'Contractual', salary: '60k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.0',posted:'2 days ago' },
    ];

    this.appliedjobs = [
      { id: 4, company: 'XYZ company', location: 'Pune, India', expires_on: '30/11/23', post: 'Garbage collector', type: 'Full Time',position:'Contractual', salary: '40k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.7',posted:'Just Now',status:'accepted' },
      { id: 4, company: 'ABC company', location: 'New Delhi, India', expires_on: '30/11/23', post: 'Electrician', type: 'Part Time',position:'Permanent', salary: '50k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' ,rating:'5.0',posted:'1 day ago',status:'rejected'},
      { id: 4, company: 'Test company', location: 'Hyderabad, India', expires_on: '30/11/23', post: 'Plumber', type: 'Part Time',position:'Contractual', salary: '60k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.0',posted:'2 days ago',status:'pending' },
    ]
  }
  onSegmentChange(event: any){
    let isSaved = event.detail.value == 'saved'? true : false;
    console.info(isSaved);
    
  }

  saveEasyAppy(job:any){
    console.info("saveEasyAppy()",job);
  }
}
