import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  otp1='';
  otp2='';
  otp3='';
  otp4='';
  // Set the time in seconds
  remainngtime = 30;
  interval:any;
  constructor(public router: Router,private toastController: ToastController) { }

  ngOnInit() {
    this.otpTimer();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom',message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color:'danger'
    });

    await toast.present();
  }
  goToHome(){
    localStorage.setItem('isLoggedin','true');
    this.router.navigate(['/home']);
  }
  gotoNextField(nextElement:any,currentele:any){
    console.info(currentele.value);
    if(currentele.value){
      nextElement.setFocus();
    }    
    
  }
  ReadFinalOtp(){
    if(this.otp1 && this.otp2 && this.otp3 && this.otp4){
      // validate OTP
    }
    console.info("OTP is ", this.otp1,this,this.otp2,this.otp3,this.otp4);
  }
  Verify(){
    if(this.otp1 && this.otp2 && this.otp3 && this.otp4){
      clearInterval(this.interval);
      if(localStorage.userreg=='true'){
        this.router.navigate(['/register']);
      }else{
        this.goToHome()
      }
      
    }else{
      this.presentToast('middle',"Please Enter valid OTP");
    }
  }
  
  otpTimer(){
    

  // Create a function to decrement the time
  const countdown = ()=>{
    // Decrement the time by one second
    this.remainngtime--;

    // Display the remaining time
    console.log(this.remainngtime);

    // If the time is up, clear the interval
    if (this.remainngtime === 0) {
      clearInterval(this.interval);
      console.log("Time's up!");
    }
  };

  // Start the countdown timer
  this.interval = setInterval(countdown, 1000);
  }
}
