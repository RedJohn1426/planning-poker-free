import { Component, OnInit } from '@angular/core';
import { EnterNamePresenter } from './enter-name.presenter';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.scss'],
  providers: [EnterNamePresenter]
})
export class EnterNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
