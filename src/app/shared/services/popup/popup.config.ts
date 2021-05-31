import { InjectionToken } from '@angular/core';

export const POPUP_CONFIG = new InjectionToken<any>('POPUP_CONFIG');
export const POPUP_DATA = new InjectionToken<any>('POPUP_DATA');

export interface PopupConfig {
  type?: 'alert' | 'error' | 'success';
}

export interface PopupData<T> {
  data?: T
}

export type PopupOpts<T> = PopupData<T> & PopupConfig;
