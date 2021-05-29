import { NgModule } from '@angular/core';
import { EnterNameComponent } from './enter-name.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LiquidButtonModule } from '../../../../shared/components/liquid-button/liquid-button.module';
import { EnterNameFormComponent } from './commons/components/enter-name-form/enter-name-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnterNameComponent, EnterNameFormComponent],
  imports: [
    CommonModule,
    LiquidButtonModule,
    RouterModule.forChild([{path: '', component: EnterNameComponent}]),
    ReactiveFormsModule
  ]
})
export class EnterNameModule { }
