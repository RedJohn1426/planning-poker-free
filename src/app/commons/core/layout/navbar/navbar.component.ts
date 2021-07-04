import { Component } from '@angular/core';
import { faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'ppf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  readonly iconConfig: IconDefinition = faCog;

  constructor(public user: UserService) { }

}
