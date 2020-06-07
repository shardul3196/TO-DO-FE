import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataPipeService {

  constructor() { }

  private isUIBlocked = new BehaviorSubject<boolean>(false);
  isUIBlocedObj = this.isUIBlocked.asObservable();

  setIsUIBlocked(data: boolean) {
    this.isUIBlocked.next(data);
  }

}
