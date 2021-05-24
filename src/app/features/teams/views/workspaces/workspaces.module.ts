import { NgModule } from '@angular/core';
import { WorkspacesComponent } from './workspaces.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WorkspacesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: WorkspacesComponent}])
  ]
})
export class WorkspacesModule { }
