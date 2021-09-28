import { Team } from '../interfaces/team.interface';

export class TeamModel {
  code: string;
  name: string;
  status: boolean;

  private readonly password?: string;

  get isLock(): boolean {
    return Boolean(this.password);
  }

  constructor(code: string, team: Team) {
    this.code = code;
    this.name = team.name;
    this.status = team.status;
    this.password = team.password;
  }

  validatePassword(password: string): boolean {
    return this.password === password;
  }
}
