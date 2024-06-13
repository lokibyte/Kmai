import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,Subject } from 'rxjs';

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

  // setCurrentStep(step: StepModel): void {
  //   this.currentStep$.next(step);
  // }

  // getCurrentStep(): Observable<StepModel> {
  //   return this.currentStep$.asObservable();
  // }

  // getSteps(): Observable<StepModel[]> {
  //   return this.steps$.asObservable();
  // }

  // moveToNextStep(): void {
  //   const index = this.currentStep$.value.stepIndex;

  //   if (index < this.steps$.value.length) {
  //     this.currentStep$.next(this.steps$.value[index]);
  //   }
  // }

  // isLastStep(): boolean {
  //   return this.currentStep$.value.stepIndex === this.steps$.value.length;
  // }
  fromlocation='';
  setfromlocation(loc:string){
    this.fromlocation = loc;
  }
  getfromlocation(){
    return this.fromlocation;
  }
  
}
