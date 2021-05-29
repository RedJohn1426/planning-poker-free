import { Injectable } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';

@Injectable()
export class EnterNamePresenter {

  constructor(
    private user: UserService,
    private router: Router
  ) { }

  saveName(name: string): void {
    console.log(name);
    this.user.setName(name);
    this.router.navigate(['/equipos/espacios-de-trabajo']);
  }

}
