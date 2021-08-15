import { Injectable } from '@angular/core';
import { TeamsService } from './commons/services/teams.service';
import { Router } from '@angular/router';
import { Path } from '../../../../commons/constants/path.enum';
import { TeamModel } from './commons/models/team.model';
import { Subscription } from 'rxjs';

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

  async redirectGame(id: string) {
    await this.router.navigateByUrl(`${Path.GAME}/${id}`);
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
