import {Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IonicSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import * as dayjs from 'dayjs'
import {LangaugeselectorComponent} from '../shared/components/langaugeselector/langaugeselector.component'
import { LangaugeService } from '../shared/services/langauge.service';
import { UtilityService } from '../shared/services/utility.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
  
})
export class HomePage implements OnInit,OnDestroy {
  swiperModules = [IonicSlides];
  searchInput = new Subject<string>();

  popular: any[] = [];
  recomendedjobs: any[] = [];

  constructor(public router: Router,private modalCtrl: ModalController,private langaugeService:LangaugeService,private utility:UtilityService) {
    this.searchInput
      .pipe(debounceTime(1000))
      .subscribe((searchTerm: string) => {
        // Call your search function here
        this.performSearch(searchTerm);
      });
      console.info("today",dayjs().format("DD/MM/YYY hh:mm:ss"));
   }
   ionViewDidEnter(){
    console.info("ionViewDidEnter Home");
    this.utility.userLoggedin = true;
   }
  ngOnInit() {
    
    console.info("ngOnInit-Home");
    this.popular = [
      { id: 1, company: 'Technyks LLC', location: 'New Delhi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '₹40-90k/year', logo_dark: 'ct_dark.png', logo_light: 'ct_light.png' },
      { id: 2, company: 'Uber Technologies', location: 'Bangalore', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '₹30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '₹30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    ];
    this.recomendedjobs = [
      { id: 4, company: 'XYZ company', location: 'Pune, India', expires_on: '30/11/23', post: 'Garbage collector', type: 'Full Time',position:'Contractual', salary: '40k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.7',posted:'Just Now',hiring:'active' },
      { id: 4, company: 'ABC company', location: 'New Delhi, India', expires_on: '30/11/23', post: 'Electrician', type: 'Part Time',position:'Permanent', salary: '50k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' ,rating:'5.0',posted:'1 day ago',hiring:''},
      { id: 4, company: 'Test company', location: 'Hyderabad, India', expires_on: '30/11/23', post: 'Plumber', type: 'Part Time',position:'Contractual', salary: '60k - 90k', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png',rating:'4.0',posted:'2 days ago' },
    ];
  }
  
   onSearchInputChange(evt: any) {
    let _search = evt.target.value;
    this.searchInput.next(_search);
  }

  performSearch(searchTerm: string) {
    // Perform the actual search operation here
    console.info(`Searching for: ${searchTerm}`);
  }

  ngOnDestroy() {
    this.searchInput.complete();
  }

  
  async changeLanguage(){
    const modal = await this.modalCtrl.create({
      component: LangaugeselectorComponent,
      mode:'md',
      componentProps: {
        btntitle: 'Save',
        showCloseIcon:true
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
console.info("this.modalCtrl.dismiss",data,role);
    if (role === 'confirm') {
      this.langaugeService.setLanguage(data);
    }
      // this.router.navigate(['/langauge']);
  }
  
  goToProfile(){
    this.router.navigate(['/home/profile']);
  }
  handleSearch(evt:any){
    console.info(evt.target.value);
  }
  goToSearch(){
    this.router.navigate(['/home/searchjob']);
  }
  doSearchVoiceAction(){
    console.info("doSearchVoiceAction");
  }
  
  doFilterAction(){
    console.info("doFilterAction");
  }
  goToDetailPage(){
    console.info("goToDetailPage()");
  }
  onJobClick(){
    console.info("onJobClick()");
    this.router.navigate(['/home/jobdetail']);
  }
  easyApply(evt:any, job:any){
    evt.stopPropagation();
    console.info("easyApply()",job);
  }
  saveJob(evt:any, job:any){
    evt.stopPropagation();
    console.info("Save",job);
  }
  shareJob(evt:any, job:any){
    evt.stopPropagation();
    console.info("Share",job);
  }
  showAllActiveHiringJobs(){
    console.info("showAllActiveHiringJobs()");
  }
  showAllRecomendedJobs(){
    console.info("showAllRecomendedJobs()");
    this.router.navigate(['/home/recomended-jobs']);
    
  }
  goToMessages(){
    console.info("goToMessages");
    this.router.navigate(['/messages']);
  }
}
