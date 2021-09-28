import { Injectable } from '@angular/core';
import { TeamsService } from './commons/services/teams.service';
import { Router } from '@angular/router';
import { Path } from '../../../../commons/constants/path.enum';
import { TeamModel } from './commons/models/team.model';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../../commons/services/modal/modal.service';
import { ModalToAddComponent } from './commons/components/modal-to-add/modal-to-add.component';
import { ModalEnterPasswordComponent } from './commons/components/modal-enter-password/modal-enter-password.component';
import { PopupService } from '../../../../commons/services/popup/popup.service';
import { PopupContent } from '../../../../commons/containers/popup-content/popup-content.interface';
import { PopupContentComponent } from '../../../../commons/containers/popup-content/popup-content.component';
import { filter } from 'rxjs/operators';

@Injectable()
export class WorkspacesPresenter {

  teams: TeamModel[] = [];
  teamSearchResults: TeamModel[] = [];

  noTeams: boolean = false;
  messageNoTeams: string = '';

  subscription = new Subscription();

  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private modal: ModalService,
    private popup: PopupService
  ) { }

  getTeams(): void {
    const subscription = this.teamsService.teams()
      .subscribe(res => {
        this.teams = res;
        this.teamSearchResults = this.teams.slice(0, 10);
        this.showMessageNoTeams(!this.teams.length, false)
      });
    this.subscription.add(subscription)
  }

  openAddTeamModal(): void {
    this.modal.open(ModalToAddComponent, { size: 'md' });
  }

  redirectGame(team: TeamModel) {
    if (team.isLock) {
      const modal = this.modal.open(ModalEnterPasswordComponent, { size: 'xs' });
      modal.afterClosed()
        .pipe(filter(password => password))
        .subscribe(password => this.redirectToPrivateGame(team, password));
    } else {
      this.router.navigateByUrl(`${Path.GAME}/${team.code}`);
    }
  }

  private redirectToPrivateGame(team: TeamModel, password: string): void {
    if (team.validatePassword(password)) {
      this.router.navigateByUrl(`${Path.GAME}/${team.code}`);
    } else {
      this.popup.open<PopupContent>(PopupContentComponent, {
        data: {
          title: '¡Oh No!',
          text: 'Contraseña Incorrecta'
        }, lifeTime: 5000
      })
    }
  }

  searchTeam(team: string): TeamModel[] {
    return this.teamSearchResults = this.teams
      .filter(res => res.name.toLocaleLowerCase().includes(team.toLocaleLowerCase()))
      .slice(0, 10);
  }

  showMessageNoTeams(condition: boolean | string, searchEngine: boolean): void {
    if (condition && !this.teamSearchResults.length) {
      this.noTeams = true;
      this.messageNoTeams = searchEngine ? 'No se encontró resultados' : 'No hay equipos registrados';
    } else if (!this.teams.length) {
      this.noTeams = true;
      this.messageNoTeams = 'No hay equipos registrados';
    } else {
      this.noTeams = false;
    }
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
