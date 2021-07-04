import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModule } from './user.module';

@Injectable({
  providedIn: UserModule
})
export class UserService {
  private _name: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  get name$(): Observable<string | null> {
    return this._name.asObservable();
  }

  constructor() {
    const storage = sessionStorage.getItem('name');
    if (storage) {
      this._name.next(storage);
    }
  }

  setName(name: string): void {
    this._name.next(name);
    sessionStorage.setItem('name', name);
  }

  removeName(): void {
    sessionStorage.removeItem('name');
    this._name.next(null);
  }
}
