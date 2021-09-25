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
import { ButtonToAddTeamComponent } from './commons/components/button-to-add-team/button-to-add-team.component';
import { ModalModule } from '../../../../commons/services/modal/modal.module';
import { ModalToAddComponent } from './commons/components/modal-to-add/modal-to-add.component';
import { InputModule } from '../../../../commons/components/input/input.module';
import { LiquidButtonModule } from '../../../../commons/components/liquid-button/liquid-button.module';

@NgModule({
  declarations: [
    WorkspacesComponent,
    SearcherComponent,
    CardTeamComponent,
    ButtonToAddTeamComponent,
    ModalToAddComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ModalModule,
    LiquidButtonModule,
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
