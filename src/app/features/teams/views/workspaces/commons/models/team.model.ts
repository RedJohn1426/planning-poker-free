import { Team } from '../interfaces/team.interface';

export class TeamModel implements Team {
  code: string;
  name: string;
  status: boolean;

  constructor(team: Team) {
    this.code = team.code;
    this.name = team.name;
    this.status = team.status;
  }
}
