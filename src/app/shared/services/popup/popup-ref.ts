import { Observable, Subject } from 'rxjs';
import { ComponentType, OverlayRef } from '@angular/cdk/overlay';

export class PopupRef<T = any, R = any> {
  private _afterClosed$ = new Subject<R>();

  constructor(
    public overlay: OverlayRef,
    public component: ComponentType<any>
  ) { }

  afterClosed(): Observable<R | undefined> {
    return this._afterClosed$.asObservable();
  }

  close(data?: R) {
    this.overlay.dispose();
    this._afterClosed$.next(data);
    this._afterClosed$.complete();
  }

}
