import { Component } from '@angular/core';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ppf-modal-to-add',
  templateUrl: './modal-to-add.component.html',
  styleUrls: ['./modal-to-add.component.scss']
})
export class ModalToAddComponent {

  privateTeam!: boolean;

  private readonly iconLock = faLock;
  private readonly iconUnlock = faUnlock;

  get iconKey() {
    return this.privateTeam ? this.iconLock : this.iconUnlock;
  }

  constructor() { }

  enableAndDisablePassword(): void {
    this.privateTeam = !this.privateTeam;
  }

  saveTeam(): void {
    console.log('se guardo');
  }

}
