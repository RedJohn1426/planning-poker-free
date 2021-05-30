import { Injectable } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';
import { Path } from '../../../../shared/constants/path.enum';

@Injectable()
export class EnterNamePresenter {

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  async saveName(name: string): Promise<void> {
    this.user.setName(name);
    await this.router.navigateByUrl(`/${Path.TEAMS}/${Path.WORKSPACES}`);
  }

}
