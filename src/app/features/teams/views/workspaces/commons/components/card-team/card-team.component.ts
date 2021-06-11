import { Component, Input } from '@angular/core';

@Component({
  selector: 'pp-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss']
})
export class CardTeamComponent {

  @Input() teamName: string = '';
  @Input() design: 'top' | 'bottom' = 'top';

}
