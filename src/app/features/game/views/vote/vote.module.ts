import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VoteComponent } from './vote.component';

@NgModule({
  declarations: [VoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: ':id', component: VoteComponent}])
  ]
})
export class VoteModule { }
