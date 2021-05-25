import { NgModule } from '@angular/core';
import { EnterNameComponent } from './enter-name.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LiquidButtonModule } from '../../../../shared/components/liquid-button/liquid-button.module';

@NgModule({
  declarations: [EnterNameComponent],
  imports: [
    CommonModule,
    LiquidButtonModule,
    RouterModule.forChild([{path: '', component: EnterNameComponent}])
  ]
})
export class EnterNameModule { }
