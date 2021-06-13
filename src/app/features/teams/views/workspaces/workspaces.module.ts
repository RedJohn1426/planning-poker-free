import { NgModule } from '@angular/core';
import { WorkspacesComponent } from './workspaces.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearcherComponent } from './commons/components/searcher/searcher.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTeamComponent } from './commons/components/card-team/card-team.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TeamsService } from './commons/services/teams.service';

@NgModule({
  declarations: [
    WorkspacesComponent,
    SearcherComponent,
    CardTeamComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: WorkspacesComponent}]),
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    TeamsService
  ]
})
export class WorkspacesModule { }
