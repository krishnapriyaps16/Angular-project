import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable()

export class DataService {

	private dataObservable: Observable<any> = null;

	constructor() {
	}

	private createDataObserver() {
		console.log("Observer Created");
	}

	public setData(data: any) {
		this.dataObservable = new Observable(observer => {
			console.log(data);
			observer.next(data);
		});
	}

	public getData(): any {

		return this.dataObservable;
	}
}