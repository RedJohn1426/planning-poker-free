import { Component, OnDestroy, OnInit } from '@angular/core';
import { WorkspacesPresenter } from './workspaces.presenter';

@Component({
  selector: 'ppf-workspaces',
  templateUrl: './workspaces.component.html',
  styleUrls: ['./workspaces.component.scss'],
  providers: [WorkspacesPresenter]
})
export class WorkspacesComponent implements OnInit, OnDestroy {

  constructor(public presenter: WorkspacesPresenter) {}

  ngOnInit(): void {
    this.presenter.getTeams();
  }

  ngOnDestroy(): void {
    this.presenter.unsubscribe();
  }

}
