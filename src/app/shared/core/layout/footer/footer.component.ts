import { Component, OnInit } from '@angular/core';
import { faCode, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly iconGitHub: IconDefinition = faGithub;
  readonly iconCode: IconDefinition = faCode;

  constructor() { }

  ngOnInit(): void {
  }

}
