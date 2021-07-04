import { NgModule } from '@angular/core';
import { PopupComponent } from './popup.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PopupComponent],
  imports: [
    OverlayModule,
    CommonModule,
    FontAwesomeModule
  ]
})
export class PopupModule { }
