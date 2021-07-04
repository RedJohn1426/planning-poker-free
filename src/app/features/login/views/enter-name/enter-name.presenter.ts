import { Injectable } from '@angular/core';
import { UserService } from '../../../../commons/services/user/user.service';
import { Router } from '@angular/router';
import { Path } from '../../../../commons/constants/path.enum';
import { PopupService } from '../../../../commons/services/popup/popup.service';

@Injectable()
export class EnterNamePresenter {

  constructor(
    private user: UserService,
    private router: Router,
    private popup: PopupService
  ) { }

  async saveName(name: string): Promise<void> {
    this.user.setName(name);
    this.popup.closeAll();
    await this.router.navigateByUrl(`/${Path.TEAMS}/${Path.WORKSPACES}`);
  }

}
