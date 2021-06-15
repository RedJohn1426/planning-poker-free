import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupError } from '../../popups/popup-error/popup-error.interface';
import { PopupService } from '../../../../../../../shared/services/popup/popup.service';
import { PopupErrorComponent } from '../../popups/popup-error/popup-error.component';
import { EnterNameFormErrors } from './enter-name-form.errors';

@Component({
  selector: 'ppf-enter-name-form',
  templateUrl: './enter-name-form.component.html',
  styleUrls: ['./enter-name-form.component.scss'],
  providers: [EnterNameFormErrors]
})
export class EnterNameFormComponent implements AfterViewInit {

  formGroup: FormGroup;

  @Output() name: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input', { static: false }) input: ElementRef<HTMLInputElement> | undefined;

  private get nameField(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  private get nameErrorMessage(): PopupError {
    if (this.nameField.hasError('required')) { return this.error.requiredDataPopup() }
    if (this.nameField.hasError('minlength')) { return this.error.minLengthDataPopup() }
    if (this.nameField.hasError('maxlength')) { return this.error.maxLengthDataPopup() }
    if (this.nameField.hasError('pattern')) { return this.error.patternDataPopup() }
    return this.error.default();
  }

  constructor(
    private fb: FormBuilder,
    private error: EnterNameFormErrors,
    private popup: PopupService
  ) {
    this.formGroup = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*')
      ])
    });
  }

  ngAfterViewInit(): void {
    this.input?.nativeElement.focus();
  }

  submitName(): void | boolean {
    if (this.formGroup.invalid) {
      this.popup.open<PopupError>(PopupErrorComponent, { data: this.nameErrorMessage, lifeTime: 6000 });
      this.input?.nativeElement.select();
      return false;
    }
    this.name.emit(this.nameField.value);
  }

}
