import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of,throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Network } from '@capacitor/network';
import { environment, BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  status = 'ONLINE';
  isConnected = true;
  constructor(private http: HttpClient) { }

  httpPost(_url:any,reqObj:any, _httpOptions:any):Observable<any> {
		const url = BASE_URL + _url;
	
		//fake post url
		// const url = "https://reqres.in/api/users";
		// reqObj = {
	 //        name: "paul rudd",
	 //        movies: ["", "Role Models"]
	 //    };

		const httpOptions = {
		    headers: new HttpHeaders(_httpOptions)
		 };
		 console.info("http",reqObj,BASE_URL);
		if(!this.isConnected){
			return throwError({status:this.status,msg:'The internet connection appears to be offline.Try again'});
		}
		return this.http.post(url,reqObj, httpOptions);
	}
	httpGet(url:any): Observable<any> {
		const _url = BASE_URL + url;
	  if(!this.isConnected){
		  return throwError({status:this.status,msg:'The internet connection appears to be offline.Try again'});
	  }
	  return this.http.get(_url);
  }
}
