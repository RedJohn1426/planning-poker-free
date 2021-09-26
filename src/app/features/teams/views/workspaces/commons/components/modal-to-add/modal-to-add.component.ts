import { Component } from '@angular/core';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { ModalToAddErrors } from './modal-to-add.errors';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TeamsService } from '../../services/teams.service';
import { PopupService } from '../../../../../../../commons/services/popup/popup.service';
import { PopupContent } from '../../../../../../../commons/containers/popup-content/popup-content.interface';
import { PopupContentComponent } from '../../../../../../../commons/containers/popup-content/popup-content.component';
import { ModalService } from '../../../../../../../commons/services/modal/modal.service';

@Component({
  selector: 'ppf-modal-to-add',
  templateUrl: './modal-to-add.component.html',
  styleUrls: ['./modal-to-add.component.scss'],
  providers: [ModalToAddErrors]
})
export class ModalToAddComponent {

  formGroup: FormGroup;

  privateTeam!: boolean;

  private readonly iconLock = faLock;
  private readonly iconUnlock = faUnlock;

  private get nameField(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  private get passwordField(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  get nameTeamError(): boolean {
    if (this.nameField.dirty) {
      return this.nameField.invalid;
    }
    return false;
  }

  get passwordError(): boolean {
    if (this.passwordField.dirty) {
      return this.passwordField.invalid;
    }
    return false;
  }

  private get nameErrorMessage(): PopupContent {
    if (this.nameField.hasError('minlength')) { return this.error.minLengthNamePopup() }
    if (this.nameField.hasError('maxlength')) { return this.error.maxLengthNamePopup() }
    if (this.nameField.hasError('required')) { return this.error.requiredNamePopup() }
    if (this.nameField.hasError('pattern')) { return this.error.patternNamePopup() }
    return this.error.default();
  }

  private get passwordErrorMessage(): PopupContent {
    if (this.passwordField.hasError('minlength')) { return this.error.minLengthPasswordPopup() }
    if (this.passwordField.hasError('maxlength')) { return this.error.maxLengthPasswordPopup() }
    if (this.passwordField.hasError('required')) { return this.error.requiredPasswordPopup() }
    if (this.nameField.hasError('pattern')) { return this.error.patternPasswordPopup() }
    return this.error.default();
  }

  get iconKey() {
    return this.privateTeam ? this.iconLock : this.iconUnlock;
  }

  constructor(
    private fb: FormBuilder,
    private error: ModalToAddErrors,
    private teamsService: TeamsService,
    private popup: PopupService,
    private modal: ModalService
  ) {
    this.formGroup = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.pattern('[a-zA-Z&+@]*')
      ]),
      password: null
    });
  }

  saveTeam(): void | boolean {
    if (this.nameField.invalid) {
      this.popup.open<PopupContent>(PopupContentComponent, { data: this.nameErrorMessage, lifeTime: 5000 });
      return false;
    }
    else if (this.passwordField.invalid) {
      this.popup.open<PopupContent>(PopupContentComponent, { data: this.passwordErrorMessage, lifeTime: 5000 });
      return false;
    }
    this.teamsService.addTeam(this.formGroup.value)
      .then(() => {
        this.popup.closeAll();
        this.formGroup.patchValue({ name: null, password: null });
      });
    this.modal.closeAll();
  }

  enableAndDisablePassword(): void {
    this.privateTeam = !this.privateTeam;
    if (this.privateTeam) {
      this.passwordField.setValidators([
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(4),
        Validators.pattern('[a-zA-Z0-9!@#$%&*()_-]*')
      ])
    } else {
      this.passwordField.clearValidators();
    }
    this.passwordField.updateValueAndValidity();
  }

}
