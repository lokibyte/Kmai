import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { HttpService } from '../http.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api:HttpService) { }

  public doLogin(reqObj:any):Observable<any>{
  	const httpOptions = {
	    "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
	  };

	console.info("reqObj",reqObj);
	return this.api.httpPost("/jobseeker/otp",reqObj, httpOptions)
  }
}
