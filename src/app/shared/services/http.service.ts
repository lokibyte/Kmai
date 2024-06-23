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

	// GET API call
	httpGet(url:any,headers:any): Observable<any> {
		const _url = BASE_URL + url;
		const httpoptions = { headers: headers };
		if(!this.isConnected){
			return throwError({status:this.status,msg:'The internet connection appears to be offline.Try again'});
		}
		return this.http.get(_url,httpoptions);
	} 
	// POST API call
	httpPost(_url:any,reqObj:any, headers:any):Observable<any> {
			const url = BASE_URL + _url;
			
			const httpoptions = { headers: headers };
			
			if(!this.isConnected){
				return throwError({status:this.status,msg:'The internet connection appears to be offline.Try again'});
			}
			return this.http.post(url,reqObj, httpoptions);
	}
	// PUT API call
	httpPut(_url:any,reqObj:any, headers:any):Observable<any> {
			const url = BASE_URL + _url;
			
			const httpoptions = { headers: headers };
			
			if(!this.isConnected){
				return throwError({status:this.status,msg:'The internet connection appears to be offline.Try again'});
			}
			return this.http.put(url,reqObj, httpoptions);
	}
	
	
}
