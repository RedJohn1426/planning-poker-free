import { Component, Input } from '@angular/core';
import { faCircle, faLockOpen, faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ppf-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent {

  @Input() teamName: string = '';
  @Input() active: boolean = false;
  @Input() isLock: boolean = false;

  readonly iconStatus = faCircle;
  readonly iconLock = faLock;
}
