import { Component, Inject } from '@angular/core';
import { POPUP_DATA } from '../../../../../../../shared/services/popup/popup.config';
import { PopupError } from './popup-error.interface';

@Component({
  selector: 'app-popup-error',
  templateUrl: './popup-error.component.html',
  styleUrls: ['./popup-error.component.scss']
})
export class PopupErrorComponent {

  constructor(
    @Inject(POPUP_DATA) public data: PopupError
  ) { }

}
