import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Subject } from 'rxjs';
import { PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber';

export interface StepModel {
  stepIndex: number;
  isComplete: boolean;
}
const STEPS = [
  { stepIndex: 1, isComplete: false },
  { stepIndex: 2, isComplete: false },
  { stepIndex: 3, isComplete: false },
  { stepIndex: 4, isComplete: false },
  { stepIndex: 5, isComplete: false },
];


@Injectable({
  providedIn: 'root'
})


export class UtilityService {
  userLoggedIn = new Subject<boolean>();
  
  steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
  currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(this.steps$.value[0]);
  
  constructor() {
    this.currentStep$.next(this.steps$.value[0]);
   }

  set userLoggedin(isloggedin:boolean){
    this.userLoggedIn.next(isloggedin);
  }
  
  //to get route back to language selector modal in diff page i.e login and home
  fromlocation='';
  setfromlocation(loc:string){
    this.fromlocation = loc;
  }
  getfromlocation(){
    return this.fromlocation;
  }
  validateEmail(email:string){
    let emailfilter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    return  emailfilter.test(email); 
  }

  validatePhoneNumber(mobilenumber:string,countrycode:string="IN"){
    console.info(countrycode);
    if(mobilenumber){
      let numberutil = PhoneNumberUtil.getInstance();
      const phonenumber = numberutil.parseAndKeepRawInput(mobilenumber, countrycode.toUpperCase());
      return numberutil.isValidNumber(phonenumber);
    }else{
      return false;
    }
    
  }

  getValidPhoneNumber(phone:string,countrycode:string){
    let numberutil = PhoneNumberUtil.getInstance();
    console.info(PhoneNumber);
    // const phonenumber = numberutil.parseAndKeepRawInput(phone, countrycode.toUpperCase());
    // numberutil.format(phonenumber, PNF.INTERNATIONAL)
  }
}
