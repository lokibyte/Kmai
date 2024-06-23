import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api:HttpService) { }

  public getOtp(reqObj:any):Observable<any>{
  	
    const headers = new HttpHeaders({
			"Content-Type":"Application/json",
			"Accept": "application/json"
		  });

	console.info("getOtp reqObj",reqObj);
	return this.api.httpPost("/jobseeker/otp",reqObj, headers)
  }
  
  //login or verify with mobile_number/email API
  public verifyOTP(reqObj:any):Observable<any>{
  	
    const headers = new HttpHeaders({
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
		"Authorization":"Basic ZGVtby1jbGllbnQ6ZGVtby1zZWNyZXQ="
		});
	const formBody = Object.keys(reqObj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(reqObj[key])).join('&');
	console.info("verifyOTP reqObj",formBody,headers);
	return this.api.httpPost("/oauth2/token",formBody, headers)
  }
  
  //Load job seeker deails API
  public loadjobSeeker(usr:any,username:string):Observable<any>{

	const headers = new HttpHeaders({
		"Content-Type":"Application/json",
		"Authorization": usr.token_type+" " + usr.access_token
		// "Authorization":"Basic ZGVtby1jbGllbnQ6ZGVtby1zZWNyZXQ="
	  });

	  const options = { headers: headers };
	
	console.info("loadjobSeeker usr",usr,headers);
	return this.api.httpGet("/jobseeker/"+username, headers)
  }

  
}
