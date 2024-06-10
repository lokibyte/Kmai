import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.page.html',
  styleUrls: ['./login-phone.page.scss'],
})
export class LoginPhonePage implements OnInit {
  loginphone_form: FormGroup;
  loginotp_form: FormGroup;
  submitmobile_num = false;
  submitotp = false;

  loginemail = true;
  phonenum = "";
  
  constructor(public router: Router,public formBuilder: FormBuilder) { }

  ngOnInit() {
    console.info("login-phone-ngOnInit");
    this.loginphone_form = this.formBuilder.group({
      mobilenumber: ['', [Validators.required, Validators.pattern('[0-9 ]{10}')]]
    });
    this.loginotp_form = this.formBuilder.group({
      otp1: ['', [Validators.required]],
      otp2: ['', [Validators.required]],
      otp3: ['', [Validators.required]],
      otp4: ['', [Validators.required]],
      otp5: ['', [Validators.required]],
      otp6: ['', [Validators.required]]
    });
  }
  get phoneErrorControl() {
    return this.loginphone_form.controls;
  }
  get otpErrorControl() {
    return this.loginotp_form.controls;
  }

  OTPDisplay(){
    this.loginemail = false;
    console.info(this.phonenum);
  }
  editPhoneNum(){
    this.loginemail = true;
  }
  // login(){
    
  //   this.router.navigate(['/home']);
  // }
  goback(){
    this.loginemail = true;
  }
  onPhoneSubmit(){
    console.info("onPhoneSubmit",this.loginphone_form);
    this.submitmobile_num = true;
    if (this.loginphone_form.invalid) {
      return;
    }
    this.loginemail = false;
    let mobileobj = this.loginphone_form.value
    console.info("phonenum",mobileobj.mobilenumber);
    this.phonenum = mobileobj.mobilenumber;
  }
  
  onOtpSubmit(){

    console.info("onOtpSubmit",this.loginotp_form);
    this.submitotp = true;
    if (this.loginotp_form.invalid) {
      return;
    }
    this.doLogin();
    this.loginemail = true;
    this.loginphone_form.reset();
    this.loginotp_form.reset();
  }
  doLogin(){
    //call api on success redircet to home if success response
      this.router.navigate(['/home']);
  }
}
