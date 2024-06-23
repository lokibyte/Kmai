import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular'
import { UtilityService } from '../shared/services/utility.service';
import { LoginService } from '../shared/services/api/login.service';
import { LoaderService } from '../shared/services/loader.service';
import { UserService } from '../shared/services/user.service';
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
              private loader:LoaderService,
              private userService:UserService
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
    let _errmsg = "Please Enter Mobile Number/Email to Login";
    this.doValidation(_errmsg);
    
  }
  onLogin(reqobj:any){
    this.loader.showLoader("Signin..");
    this.loginService.getOtp(reqobj).subscribe( (data) => {
      this.loader.hideLoader();
      console.info("response",data);
      this.userService.setuserloginType(reqobj);
      this.router.navigate(['/otp']);
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
  doValidation(errmsg:string){
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
        }
        if(_validemail){
          reqobj.loginType = 'EMAIL';
          reqobj.username = this.email;
          console.info("login reqobj2",reqobj,_validemail);
          this.onLogin(reqobj);
          return;
        }
      }else{
        this.presentToast('top',errmsg);  
      }

    }else{
      this.presentToast('top',errmsg);
    }
  }
  doSignUp(){
    localStorage.setItem('userreg','true');
    if(this.phone || this.email){
      let _errmsg ="Please Enter Mobile Number/Email to Signup";
      this.doValidation(_errmsg);
      
    }else{
      this.presentToast('bottom',"Please Enter Mobile Number/Email to Signup");
    }
    
  }

  
}
