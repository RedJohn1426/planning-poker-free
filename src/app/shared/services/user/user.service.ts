import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  get name(): Observable<string | null> {
    return this.username.asObservable();
  }

  constructor() {
    const storage = sessionStorage.getItem('name');
    if (storage) {
      this.username.next(storage);
    }
  }

  setName(name: string): void {
    this.username.next(name);
    sessionStorage.setItem('name', name);
  }

  removeName(): void {
    sessionStorage.removeItem('name');
    this.username.next(null);
  }
}
