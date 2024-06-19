import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular'
import { UtilityService } from '../shared/services/utility.service';
import { LoginService } from '../shared/services/api/login.service';
import { LoaderService } from '../shared/services/loader.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login_form: FormGroup;
  submitted = false;
  phone="";
  email="";
  constructor(public router: Router,
              public formBuilder: FormBuilder,
              private toastController: ToastController,
              private utility:UtilityService,
              private loginService:LoginService,
              private loader:LoaderService
            ) { }

  ngOnInit() {
    console.info("login-ngOnInit");
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
  doLogin(){
    
    if(this.phone || this.email){
      let _validphone = this.utility.validatePhoneNumber(this.phone,"IN");
      let _validemail = this.utility.validateEmail(this.email);
      let res;
      // console.info("_validphone", typeof _validphone);
      // console.info("_validemail", typeof _validemail);
      if(_validphone || _validemail){
        let reqobj = {
          loginType:'',
          username:''
        };
        if(_validphone && _validemail){
          console.info("choose phone");
          reqobj.loginType = 'MOBILE';
          reqobj.username = this.phone;
          this.onLogin(reqobj);
          return;
        }
        if(_validphone){
          reqobj.loginType = 'MOBILE';
          reqobj.username = '+91'+this.phone;
          console.info("login reqobj1",reqobj);
          this.onLogin(reqobj);
          return;
          // this.utility.getValidPhoneNumber("9841311167","IN");
        }
        if(_validemail){
          reqobj.loginType = 'EMAIL';
          reqobj.username = this.email;
          console.info("login reqobj2",reqobj,_validemail);
          this.onLogin(reqobj);
          return;
        }
          
          // this.utility.getValidPhoneNumber("9841311167","IN")
        // this.loginService.doLogin()
        // this.router.navigate(['/otp']);
      }else{
        this.presentToast('top',"Please Enter Mobile Number/Email to Login");  
      }

    }else{
      this.presentToast('top',"Please Enter Mobile Number/Email to Login");
    }
  }
  onLogin(reqobj:any){
    this.loader.showLoader("Signin..");
    this.loginService.doLogin(reqobj).subscribe( (data) => {
      this.loader.hideLoader();
      console.info("response",data);
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
  
  doSignUp(){
    localStorage.setItem('userreg','true');
    if(this.phone || this.email){
      this.router.navigate(['/otp']);
      
    }else{
      this.presentToast('bottom',"Please Enter Mobile Number/Email to Signup");
    }
    
  }

  
}
