import { Component, Inject } from '@angular/core';
import { MODAL_CONFIG, ModalConfig } from './modal.config';
import { ModalRef } from './modal-ref';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ppf-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  readonly iconClose = faTimes;

  constructor(
    @Inject(MODAL_CONFIG) public config: ModalConfig,
    public ref: ModalRef
  ) { }

  close(): void {
    this.ref.close();
  }

}
