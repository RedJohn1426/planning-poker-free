import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './commons/core/layout/layout.component';
import { Path } from './commons/constants/path.enum';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
