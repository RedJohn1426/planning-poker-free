import { Component, Inject, OnInit } from '@angular/core';
import { POPUP_CONFIG, PopupConfig } from './popup.config';
import { PopupRef } from './popup-ref';
import { faTimesCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ppf-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  readonly iconCross: IconDefinition = faTimesCircle;

  constructor(
    @Inject(POPUP_CONFIG) public config: PopupConfig,
    public ref: PopupRef
  ) { }

  ngOnInit(): void {
    if (this.config.lifeTime !== 'unlimited') {
      setTimeout(() => {
        this.ref.close();
      }, this.config.lifeTime);
    }
  }

  close(): void {
    this.ref.close();
  }

}
