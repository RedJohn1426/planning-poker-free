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
import { CardToAddComponent } from './commons/components/card-to-add/card-to-add.component';

@NgModule({
  declarations: [
    WorkspacesComponent,
    SearcherComponent,
    CardTeamComponent,
    CardToAddComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forChild([{path: '', component: WorkspacesComponent}])
  ],
  providers: [
    TeamsService
  ]
})
export class WorkspacesModule { }
