import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private route: Router) {

	}

	// public setUserDetails(userDetails) {
	// 	console.log(userDetails);
	// 	localStorage.setItem('userDetails', JSON.stringify(userDetails));
	// }

	// public getUserDetails() {
	// 	console.log(localStorage.getItem('userDetails'));
	// 	return JSON.parse(localStorage.getItem('userDetails'));
	// }
}