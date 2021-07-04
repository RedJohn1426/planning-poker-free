import { Injectable } from '@angular/core';
import { TeamsService } from './commons/services/teams.service';
import { TeamsInterface } from './commons/interfaces/teams.interface';
import { Router } from '@angular/router';
import { Path } from '../../../../commons/constants/path.enum';

@Injectable()
export class WorkspacesPresenter {

  teams: TeamsInterface[] = [];
  teamSearchResults: TeamsInterface[] = [];

  constructor(
    private teamsService: TeamsService,
    private router: Router
  ) {
    this.teamsService.teams()
      .subscribe(res => {
        this.teams = res;
        this.teamSearchResults = res.slice(0, 10);
      })
  }

  async redirectGame(id: string) {
    await this.router.navigateByUrl(`${Path.GAME}/${id}`);
  }

  searchTeam(team: string): TeamsInterface[] {
    return this.teamSearchResults = this.teams
      .filter(res => res.name.toLocaleLowerCase().includes(team.toLocaleLowerCase()))
      .slice(0, 10);
  }
}
