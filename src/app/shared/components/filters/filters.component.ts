import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }
  cities = [
    {
      id:1,
      name:'Hyderabad'
    },
    {
      id:2,
      name:'Telangana'
    },
    {
      id:3,
      name:'Warangal'
    },
  ];
  
  exps = [
    {
      id:1,
      name:'5 Years'
    },
    {
      id:2,
      name:'2 Years'
    }
  ];
  
  jobtypes = [
    {
      id:1,
      name:'Contract'
    },
    {
      id:2,
      name:'Full Time'
    },
    {
      id:3,
      name:'Part Time'
    },
    {
      id:4,
      name:'Remote'
    }
  ];
  education = [
    {
      id:1,
      name:'10th Pass'
    },
    {
      id:2,
      name:'12th Pass'
    },
    {
      id:3,
      name:'B.A Pass'
    }
  ];
  
  posteddata = [
    {
      id:1,
      name:'Today'
    },
    {
      id:2,
      name:'1 Day ago'
    },
    {
      id:3,
      name:'2 Days ago'
    },
    {
      id:4,
      name:'3 Days ago'
    }
  ];
  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
  applyFilter(){
    this.modalCtrl.dismiss();
  }
  clearFilter(){
    console.info("clearFilter");
    this.resetFilterValues(this.cities);  
    this.resetFilterValues(this.exps);  
    this.resetFilterValues(this.jobtypes);  
    this.resetFilterValues(this.education);  
    this.resetFilterValues(this.posteddata);  
  }
  resetFilterValues(arrays:any){
    arrays.map((obj:any) => obj.selected=false);
  }
  onSearchInputChange(evt: any) {

  }
  doSearchVoiceAction(){
    console.info("doSearchVoiceAction");
  }
  
  pinFormatter(value: number) {
    // return `${value}%`;
    return `₹ ${value}K `;
  }
  onSalaryChange(evt:any){
    console.info("salary",evt.target.value);
  }
  onSelectLocation(city:any,i:any){
    city.selected = city.selected == true ? false:true;
    console.info("onSelectLocation",city)
  }
  
  onSelectExp(edc:any,i:any){
    edc.selected = edc.selected == true ? false:true;
    console.info("onSelectExp",edc)
  }
  onSelectJobType(jobtype:any,i:any){
    jobtype.selected = jobtype.selected == true ? false:true;
    console.info("onSelectJobType",jobtype)
  }
  onSelectEdu(edc:any,i:any){
    edc.selected = edc.selected == true ? false:true;
    console.info("onSelectEdu",edc)
  }
  onSelectDates(dat:any,i:any){
    dat.selected = dat.selected == true ? false:true;
    console.info("onSelectDates",dat)
  }
}