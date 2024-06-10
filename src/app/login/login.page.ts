import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular'

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
  constructor(public router: Router,public formBuilder: FormBuilder,private toastController: ToastController) { }

  ngOnInit() {
    console.info("login-ngOnInit");
    // this.login_form = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
  }
  // get errorControl() {
  //   return this.login_form.controls;
  // }
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
    // 1.validate user email/passowrd
    // 2.call login api service
    // 3.redirect to Home if login success else show error to user & stays in login screen itself
    if(this.phone || this.email){
      this.router.navigate(['/otp']);
    }else{
      this.presentToast('top',"Please Enter Mobile Number/Email to Login");
    }
    
  }
  // onSubmit(){
  //   this.submitted = true;
  //   console.info("onSubmit",this.login_form.invalid);
  //   if (this.login_form.invalid) {
  //     return;
  //   }
  //   console.info('login api',this.login_form.value);
  //   this.doLogin();
  // }
  // fresh code for new changes
  doSignUp(){
    localStorage.setItem('userreg','true');
    if(this.phone || this.email){
      this.router.navigate(['/otp']);
      
    }else{
      this.presentToast('bottom',"Please Enter Mobile Number/Email to Signup");
    }
    
  }
}
