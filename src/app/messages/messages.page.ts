import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  messages = [
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
    {
      id:1,
      name:'Google',
      message:'Hi, I recently submitted...',
      time:'11:00 am'
    },
  ];
  constructor(public router: Router) { }

  ngOnInit() {
  }
  goBack(){
    console.info("goBack()");
    this.router.navigate(['/home/main']);
  }
  openChat(){
    this.router.navigate(['/chat']);
  }
}
