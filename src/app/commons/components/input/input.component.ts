import { Component, ElementRef, forwardRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ppf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {

  @Input() id!: string;
  @Input() label!: string
  @Input() type: 'text' | 'password' = 'text';
  @Input() error: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() maxLength: string | undefined;

  @ViewChild('inputTag') inputTag!: ElementRef<HTMLInputElement>;
  @ViewChild('labelTag') labelTag!: ElementRef<HTMLLabelElement>;

  @HostListener('focusin', ['$event']) focusIn() {
    this.renderer.addClass(this.labelTag?.nativeElement, 'active');
  }

  @HostListener('focusout', ['$event']) focusOut() {
    if (!this.value) {
      this.renderer.removeClass(this.labelTag?.nativeElement, 'active');
    }
  }

  value: string = '';
  counter: number = 0;
  // isDisabled: boolean = this.disabled;

  onTouched: () => void = () => {};

  onChange: (value: string) => void = () => {};

  constructor(private renderer: Renderer2) { }

  focusInput(): void {
    this.inputTag.nativeElement.focus();
  }

  onInput(event: Event): void {
    const inputEvent = event.target as HTMLInputElement;
    const value = inputEvent.value;
    this.counter = value.length;
    this.value = value;
    this.onTouched();
    this.onChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value;
      this.counter = value.length;
    } else {
      this.value = '';
    }
  }

}
