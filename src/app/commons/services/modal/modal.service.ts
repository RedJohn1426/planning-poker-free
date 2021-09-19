import { Injectable, Injector } from '@angular/core';
import { ModalModule } from './modal.module';
import { ModalRef } from './modal-ref';
import { ComponentType, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { MODAL_CONFIG, MODAL_DATA, ModalConfig, ModalOpts } from './modal.config';
import { ComponentPortal } from '@angular/cdk/portal';
import { ModalComponent } from './modal.component';
import { CdkInjector } from '../../core/cdk/cdk.injector';

const defaultConfig: ModalConfig  = {
  size: 'md'
}

@Injectable({
  providedIn: ModalModule
})
export class ModalService {
  private _openDialogs: ModalRef[] = [];

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  static getConfig(config: ModalConfig): ModalConfig {
    return {
      size: config?.size || defaultConfig.size,
    };
  }

  open<T = any, R = any>(component: ComponentType<any>, data: ModalOpts<T> = {}): ModalRef<R> {
    const config = new OverlayConfig();
    const overlayRef = this.overlay.create(config);
    const modalRef = new ModalRef<R, T>(overlayRef, component);
    const injector = this.createInjector(modalRef, data);
    overlayRef.attach(new ComponentPortal(ModalComponent, null, injector));

    this._openDialogs.push(modalRef);
    modalRef.afterClosed().subscribe(() => this._removeOpenDialog(modalRef));
    return modalRef;
  }

  private createInjector(ref: ModalRef, data: ModalOpts<any>) {
    const injectionTokens = new WeakMap();
    injectionTokens.set(ModalRef, ref);
    injectionTokens.set(MODAL_CONFIG, ModalService.getConfig(data));
    injectionTokens.set(MODAL_DATA, data?.data || null);
    return new CdkInjector(this.injector, injectionTokens);
  };

  closeAll(): void {
    this._closeDialogs(this._openDialogs);
  }

  private _closeDialogs = (dialogs: ModalRef[]) => {
    let i = dialogs.length;

    while (i--) {
      dialogs[i].close();
    }
  };

  private _removeOpenDialog(dialogRef: ModalRef<any>) {
    const index = this._openDialogs.indexOf(dialogRef);

    if (index > -1) {
      this._openDialogs.splice(index, 1);
    }
  }

}
