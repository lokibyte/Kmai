import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'
import { UserService } from '../shared/services/user.service';
import { LoginService } from '../shared/services/api/login.service';
import { LoaderService } from '../shared/services/loader.service';

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
  constructor(
    public router: Router,
    private toastController: ToastController,
    private userService:UserService,
    private loginService:LoginService,
    private loader:LoaderService,
  ) { }

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
    // console.info(currentele.value);
    if(currentele.value){
      nextElement.setFocus();
    }    
    
  }
  ReadFinalOtp(){
    if(this.otp1 && this.otp2 && this.otp3 && this.otp4){
      // validate OTP
    }
    // console.info("OTP is ", this.otp1,this,this.otp2,this.otp3,this.otp4);
  }
  Verify(){
    if(this.otp1 && this.otp2 && this.otp3 && this.otp4){
      clearInterval(this.interval);
      let _otp = this.otp1 +""+this.otp2 +""+ this.otp3 +""+ this.otp4;
      let user = this.userService.getUser();
      let _logintype = (user.loginType == "MOBILE") ? "mobile_number":"email_id";
      let _username = (user.loginType == "MOBILE") ? user.mobileNumber:user.email;
      
      let reqobj = {
        "username":_username,
        "grant_type":"grant_otp",
        "otp":_otp+"11",
        "username_attr_type":_logintype
      };
      // console.info("OTP",reqobj );
      this.doOTPverify(reqobj);
      // if(localStorage.userreg=='true'){
      //   this.router.navigate(['/register']);
      // }else{
      //   this.goToHome()
      // }
      
    }else{
      this.presentToast('middle',"Please Enter valid OTP");
    }
  }
  doOTPverify(reqobj:any){
    this.loader.showLoader("Signin..");
    this.loginService.verifyOTP(reqobj).subscribe( (data) => {
      this.loader.hideLoader();
      // console.info("response",data);
      let usr = this.userService.getUser();
      let usrdata = {access_token:data.access_token,
                    refresh_token:data.refresh_token,
                    token_type:data.token_type
                  };
      let _usr = {...usr,...usrdata};
      this.userService.setuser(_usr);
      this.loadJobSeekerDetails(_usr,reqobj.username);
     
    }
    ,(err) => {
       this.loader.hideLoader();
      console.log("POST call in error", err);
    }
    ,() => {
      console.log("The POST observable is now completed.");
    }
   )
  }

  loadJobSeekerDetails(usr:any,username:string){
    // this.loader.showLoader("Signin..");
    this.loginService.loadjobSeeker(usr,username).subscribe( (data) => {
      this.loader.hideLoader();
      console.info("loadJobSeekerDetails response",data);
      let usr = this.userService.getUser();
      let obj = {jobseekerId:data.jobseekerId};
      let _usr = {...usr,...obj};
      this.userService.setuser(_usr);
      // if fullName is null redirect to Register page else go to home
      if(!data.fullName || data.fullName=='' || data.fullName==null ){
        this.router.navigate(['/register']);
      }else{
        this.router.navigate(['/home']);
      }
      
    }
    ,(err) => {
       this.loader.hideLoader();
      console.log("Get call in error", err);
    }
    ,() => {
      console.log("The POST observable is now completed.");
    }
   );
    
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
