import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  implements OnInit {
  searchInput = new Subject<string>();
  selectedFltr = false;
  selectedroles:any = [];
  jobroles = [
    {
      id:1,
      name:'Painter'
    },
    {
      id:2,
      name:'Artist'
    },
    {
      id:3,
      name:'Carpenter'
    },
    {
      id:4,
      name:'Driver'
    },
    {
      id:5,
      name:'Designer'
    },
    {
      id:6,
      name:'Electrician'
    },
    {
      id:7,
      name:'Delivery agent'
    },
    {
      id:8,
      name:'Delivery agent2'
    },
    {
      id:9,
      name:'Delivery agent3'
    },
    {
      id:10,
      name:'Delivery agent4'
    },
    {
      id:11,
      name:'Delivery agent5'
    },
    {
      id:12,
      name:'Delivery agent6'
    },
    {
      id:13,
      name:'Delivery agent7'
    },
    {
      id:14,
      name:'Delivery agent8'
    },
    {
      id:15,
      name:'Barber'
    },
    {
      id:16,
      name:'Role1'
    },
    {
      id:17,
      name:'Role2'
    },
    {
      id:18,
      name:'Role3'
    },
    {
      id:19,
      name:'Role4'
    }
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onSearchInputChange(evt: any) {
    let _search = evt.target.value;
    this.searchInput.next(_search);
  }
  doSearchVoiceAction(){
    console.info("doSearchVoiceAction");
  }
  
  doFilterAction(){
    console.info("doFilterAction");
  }
  close(){
    this.modalCtrl.dismiss(); 
  }
  onSelect(role:any,idx:any){
    this.selectedFltr = idx;
    role.selected = true;
    this.selectedroles.push(role);
  }
}
