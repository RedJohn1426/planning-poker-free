import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pp-enter-name-form',
  templateUrl: './enter-name-form.component.html',
  styleUrls: ['./enter-name-form.component.scss']
})
export class EnterNameFormComponent {

  formGroup: FormGroup;

  @Output() name: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input', { static: false })
  set input(element: ElementRef<HTMLInputElement>) {
    console.log(element);
    if (element) {
      element.nativeElement.focus();
    }
  }

  get nameField(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  constructor(
    private fb: FormBuilder
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

  submitName(): void | boolean {
    if (this.formGroup.invalid) { return false; }
    this.name.emit(this.nameField.value);
  }

}
