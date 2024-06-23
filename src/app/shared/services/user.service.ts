import { Injectable } from '@angular/core';
interface Jobrole{
  "preferredJobRoleId": number,
  "jobseekerId": number,
  "preferredJobRoleName": string
}

interface User{
  "jobseekerId": number,
    "educationDetails": [],
    "workExperience": [],
    "fullName": string,
    "mobileNumber": string,
    "email": string,
    "userId": string,
    "username": string,
    "active": boolean,
    "experience": string,
    "location": string,
    "preferredJobRoles": Jobrole[],
    "jobRole": string,
    "qualification": string,
    "profileHeadline": string,
    "keySkills": string,
    "loginType":string
}
@Injectable({
  providedIn: 'root'
})



export class UserService {
  user:any = {
    active:'',
    educationDetails:[],
    experience:'',
    fullName:'',
    jobRole:'',
    keySkills:'',
    location:'',
    preferredJobRoles:[],
    profileHeadline:'',
    qualification:'',
    userId:'',
    workExperience:[],
    jobseekerId:'',
    loginType:'',
    mobileNumber:'',
    email:'',
    access_token:'',
    refresh_token:'',
    token_type:''
  };
  constructor() {
    
   }
  
  getloginType(){
    if(this.user?.loginType){
      return this.user.loginType;
    }
  }
  setuserloginType(obj:any){
    console.info("user",obj);
    this.user.loginType = obj.loginType;

    if(obj.loginType=='MOBILE'){
      this.user.mobileNumber = obj.username;
    }else{
      this.user.email = obj.username;
    }
    
  }
  getUser(){
    return this.user;
  }
  setuser(user:any){
    this.user = user;
  }
}
