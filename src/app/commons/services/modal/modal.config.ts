import { InjectionToken } from '@angular/core';

export const MODAL_CONFIG = new InjectionToken<any>('MODAL_CONFIG');
export const MODAL_DATA = new InjectionToken<any>('MODAL_DATA');

export interface ModalConfig {
  size?: 'sm' | 'md' | 'lg';
}

export interface ModalData<T> {
  data?: T
}

export type ModalOpts<T> = ModalData<T> & ModalConfig;
