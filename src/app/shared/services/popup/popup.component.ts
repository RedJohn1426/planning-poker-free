import { Component, Inject } from '@angular/core';
import { POPUP_CONFIG, PopupConfig } from './popup.config';
import { PopupRef } from './popup-ref';
import { faTimesCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  readonly iconCross: IconDefinition = faTimesCircle;

  constructor(
    @Inject(POPUP_CONFIG) public config: PopupConfig,
    public ref: PopupRef
  ) { }

  close(): void {
    this.ref.close();
  }

}
