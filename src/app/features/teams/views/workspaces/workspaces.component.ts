import { Component } from '@angular/core';
import { WorkspacesPresenter } from './workspaces.presenter';

@Component({
  selector: 'ppf-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss'],
  providers: [WorkspacesPresenter]
})
export class WorkspacesComponent {

  constructor(public presenter: WorkspacesPresenter) { }

}
