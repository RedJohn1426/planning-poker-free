import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/core/layout/layout.component';
import { Path } from './shared/constants/path.enum';

const routes: Routes = [
  {
    path: Path.LOGIN,
    loadChildren: () => import('./features/login/login-routing.module').then(m => m.LoginRoutingModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: Path.TEAMS,
        pathMatch: 'full'
      },
      {
        path: Path.TEAMS,
        loadChildren: () => import('./features/teams/teams-routing.module').then(m => m.TeamsRoutingModule)
      },
      {
        path: Path.GAME,
        loadChildren: () => import('./features/game/game-routing.module').then(m => m.GameRoutingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
