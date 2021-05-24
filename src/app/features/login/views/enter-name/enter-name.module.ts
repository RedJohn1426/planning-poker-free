import { NgModule } from '@angular/core';
import { EnterNameComponent } from './enter-name.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EnterNameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: EnterNameComponent}])
  ]
})
export class EnterNameModule { }
