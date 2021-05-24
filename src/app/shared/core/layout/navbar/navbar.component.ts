import { Component, OnInit } from '@angular/core';
import { faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  readonly iconConfig: IconDefinition = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
