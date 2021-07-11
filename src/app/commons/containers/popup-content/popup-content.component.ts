import { Component, Inject } from '@angular/core';
import { POPUP_DATA } from '../../services/popup/popup.config';
import { PopupContent } from './popup-content.interface';

@Component({
  selector: 'ppf-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.scss']
})
export class PopupContentComponent {

  constructor(
    @Inject(POPUP_DATA) public data: PopupContent
  ) { }

}
