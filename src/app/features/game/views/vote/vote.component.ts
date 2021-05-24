import { Component, OnInit } from '@angular/core';
import { VotePresenter } from './vote.presenter';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  providers: [VotePresenter]
})
export class VoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
