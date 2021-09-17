import { Injectable, Injector } from '@angular/core';
import { PopupModule } from './popup.module';
import { PopupRef } from './popup-ref';
import { ComponentType, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { POPUP_CONFIG, POPUP_DATA, PopupConfig, PopupOpts } from './popup.config';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopupComponent } from './popup.component';
import { CdkInjector } from '../../core/cdk/cdk.injector';

const defaultConfig: PopupConfig  = {
  type: 'error',
  lifeTime: 10000
}

@Injectable({
  providedIn: PopupModule
})
export class PopupService {
  private _openDialogs: PopupRef[] = [];

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  static getConfig(config: PopupConfig): PopupConfig {
    return {
      type: config?.type || defaultConfig.type,
      lifeTime: config?.lifeTime || defaultConfig.lifeTime
    };
  }

  open<T = any, R = any>(component: ComponentType<any>, data: PopupOpts<T> = {}): PopupRef<R> {
    const config = new OverlayConfig();
    const overlayRef = this.overlay.create(config);
    const popupRef = new PopupRef<R, T>(overlayRef, component);
    const injector = this.createInjector(popupRef, data);
    overlayRef.attach(new ComponentPortal(PopupComponent, null, injector));

    this._openDialogs.push(popupRef);
    popupRef.afterClosed().subscribe(() => this._removeOpenDialog(popupRef));
    return popupRef;
  }

  private createInjector(ref: PopupRef, data: PopupOpts<any>) {
    const injectionTokens = new WeakMap();
    injectionTokens.set(PopupRef, ref);
    injectionTokens.set(POPUP_CONFIG, PopupService.getConfig(data));
    injectionTokens.set(POPUP_DATA, data?.data || null);
    return new CdkInjector(this.injector, injectionTokens);
  };

  closeAll(): void {
    this._closeDialogs(this._openDialogs);
  }

  private _closeDialogs = (dialogs: PopupRef[]) => {
    let i = dialogs.length;

    while (i--) {
      dialogs[i].close();
    }
  };

  private _removeOpenDialog(dialogRef: PopupRef<any>) {
    const index = this._openDialogs.indexOf(dialogRef);

    if (index > -1) {
      this._openDialogs.splice(index, 1);
    }
  }

}
