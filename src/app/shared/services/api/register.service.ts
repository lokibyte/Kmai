import { Injectable } from '@angular/core';
import { Observable, of,throwError } from 'rxjs';
import { HttpService } from '../http.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private api:HttpService) { }

  //login or verify with mobile_number/email API
  public updateUserInfo(reqObj:any,usr:any):Observable<any>{
  	
    // const headers = new HttpHeaders({
		// 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
		// "Authorization":"Basic ZGVtby1jbGllbnQ6ZGVtby1zZWNyZXQ="
		// });

    const headers = new HttpHeaders({
      "Content-Type":"Application/json",
      "Authorization": usr.token_type+" " + usr.access_token
      });
  
      const options = { headers: headers }; 
    //   const options = { headers: headers };

	// const formBody = Object.keys(reqObj).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(reqObj[key])).join('&');
	// console.info("verifyOTP reqObj",formBody,headers);
  let _url = `/jobseeker/${usr.jobseekerId}/personal-info`;

	return this.api.httpPut(_url,reqObj, headers)
  }


}
