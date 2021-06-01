import { NgModule } from '@angular/core';
import { EnterNameComponent } from './enter-name.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LiquidButtonModule } from '../../../../shared/components/liquid-button/liquid-button.module';
import { EnterNameFormComponent } from './commons/components/enter-name-form/enter-name-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupErrorComponent } from './commons/popups/popup-error/popup-error.component';

@NgModule({
  declarations: [
    EnterNameComponent,
    EnterNameFormComponent,
    PopupErrorComponent
  ],
  imports: [
    CommonModule,
    LiquidButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: EnterNameComponent}])
  ]
})
export class EnterNameModule { }
