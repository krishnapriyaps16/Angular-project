import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from './user-service';

@Injectable({
	providedIn: 'root'
})
export class HttpClientService {

	
	httpClient: any;
	baseUrlAdmin: string = "http://127.0.0.1:8000/"
	
	constructor(private http: HttpClient,
		private userService: UserService) { }

	/**
   * 
   * @param url 
   * @param params 
   */
	postServiceOfficialWithoutToken(url: string, params: object): Observable<any> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		console.log(params);
		return this.http.post<any>(this.baseUrlAdmin + url, params, { headers: headers })
			.pipe(
				map(data => {
					return data;
				}))
	}


	getServiceOfficial(url: string): Observable<any> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin':'*',
			'Access-Control-Allow-Methods':'*'
		});
		return this.http.get<any>(this.baseUrlAdmin + url, { headers: headers })
			.pipe(
				map(data => {
					return data;
				}))
	}

	/**
	 * 
	 * @param url 
	 * @param params 
	 */
	postServiceOfficial(url: string, params: object): Observable<any> {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.post<any>(this.baseUrlAdmin + url, params, { headers: headers })
			.pipe(
				map(data => {
					return data;
				}))
	}
/**
	 * 
	 * @param url 
	 * @param params 
	 */
 patchServiceOfficial(url: string, params: object): Observable<any> {
	let headers = new HttpHeaders({
		'Content-Type': 'application/json'
	});
	return this.http.patch<any>(this.baseUrlAdmin + url, params, { headers: headers })
		.pipe(
			map(data => {
				return data;
			}))
}

}


