import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from '../../shared/constants/path.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Path.WORKSPACES
  },
  {
    path: Path.WORKSPACES,
    loadChildren: () => import('./views/workspaces/workspaces.module').then(m => m.WorkspacesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }
