import { Component } from '@angular/core';
import { ModalRef } from '../../../../../../../commons/services/modal/modal-ref';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalEnterPasswordErrors } from './modal-enter-password.errors';
import { PopupContent } from '../../../../../../../commons/containers/popup-content/popup-content.interface';
import { PopupContentComponent } from '../../../../../../../commons/containers/popup-content/popup-content.component';
import { PopupService } from '../../../../../../../commons/services/popup/popup.service';

@Component({
  selector: 'ppf-modal-enter-password',
  templateUrl: './modal-enter-password.component.html',
  styleUrls: ['./modal-enter-password.component.scss'],
  providers: [ModalEnterPasswordErrors]
})
export class ModalEnterPasswordComponent {

  formGroup: FormGroup;

  private get passwordField(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  get passwordError(): boolean {
    if (this.passwordField.dirty) {
      return this.passwordField.invalid;
    }
    return false;
  }

  private get passwordErrorMessage(): PopupContent {
    if (this.passwordField.hasError('required')) { return this.error.requiredPasswordPopup() }
    return this.error.default();
  }

  constructor(
    private modalRef: ModalRef<ModalEnterPasswordComponent>,
    private fb: FormBuilder,
    private error: ModalEnterPasswordErrors,
    private popup: PopupService
  ) {
    this.formGroup = this.fb.group({
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ])
    });
  }

  close(): void | boolean {
    if (this.passwordField.invalid) {
      this.popup.open<PopupContent>(PopupContentComponent, { data: this.passwordErrorMessage, lifeTime: 5000 });
      return false;
    }
    this.modalRef.close(this.passwordField.value);
  }

}
