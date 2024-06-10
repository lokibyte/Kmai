import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-recomended-jobs',
  templateUrl: './recomended-jobs.page.html',
  styleUrls: ['./recomended-jobs.page.scss'],
})
export class RecomendedJobsPage implements OnInit {
  recomendedjobs: any[] = [];
  constructor(public router: Router,private modalCtrl: ModalController) { }

  ngOnInit() {
    console.info("ngOnInit");
    
    this.recomendedjobs = [
      { id: 4, company: 'XYZ company', location: 'Pune, India', expires_on: '30/11/23', post: 'Garbage collector', type: 'Full Time',position:'Contractual', salary: '40k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.7',posted:'Just Now',hiring:'active' },
      { id: 4, company: 'ABC company', location: 'New Delhi, India', expires_on: '30/11/23', post: 'Electrician', type: 'Part Time',position:'Permanent', salary: '50k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' ,rating:'5.0',posted:'1 day ago',hiring:''},
      { id: 4, company: 'Test company', location: 'Hyderabad, India', expires_on: '30/11/23', post: 'Plumber', type: 'Part Time',position:'Contractual', salary: '60k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.0',posted:'2 days ago' },
    ];
  }
  goBack(){
    console.info("goBack()");
    this.router.navigate(['/home/main'])
  }
}
