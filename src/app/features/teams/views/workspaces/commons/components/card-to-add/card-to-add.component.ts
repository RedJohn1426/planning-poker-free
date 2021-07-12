import { Component, ElementRef, ViewChild } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { TeamsService } from '../../services/teams.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupContent } from '../../../../../../../commons/containers/popup-content/popup-content.interface';
import { CardToAddErrors } from './card-to-add.errors';
import { PopupService } from '../../../../../../../commons/services/popup/popup.service';
import { PopupContentComponent } from '../../../../../../../commons/containers/popup-content/popup-content.component';

@Component({
  selector: 'ppf-card-to-add',
  templateUrl: './card-to-add.component.html',
  styleUrls: ['./card-to-add.component.scss'],
  providers: [CardToAddErrors]
})
export class CardToAddComponent {

  @ViewChild('input') input: ElementRef<HTMLInputElement> | undefined;

  formGroup: FormGroup;

  creating: boolean = false;

  readonly iconConfirm = faCheckCircle;
  readonly iconCancel = faTimesCircle;

  private get nameTeamField(): FormControl {
    return this.formGroup.get('nameTeam') as FormControl;
  }

  private get nameTeamErrorMessage(): PopupContent {
    if (this.nameTeamField.hasError('minlength')) { return this.error.minLengthDataPopup() }
    if (this.nameTeamField.hasError('maxlength')) { return this.error.maxLengthDataPopup() }
    if (this.nameTeamField.hasError('required')) { return this.error.requiredDataPopup() }
    if (this.nameTeamField.hasError('pattern')) { return this.error.patternDataPopup() }
    return this.error.default();
  }

  constructor(
    private fb: FormBuilder,
    private error: CardToAddErrors,
    private teamsService: TeamsService,
    private popup: PopupService
  ) {
    this.formGroup = this.fb.group({
      nameTeam: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(7),
        Validators.pattern('[a-zA-Z&+@ ]*')
      ])
    });
  }

  toCreate(): void {
    this.creating = true;
    setTimeout(() => {  this.input?.nativeElement.focus() }, 50)
  }

  confirmCreate(): void | boolean {
    if (this.formGroup.invalid) {
      this.popup.open<PopupContent>(PopupContentComponent, { data: this.nameTeamErrorMessage, lifeTime: 5000 });
      this.input?.nativeElement.select();
      return false;
    }
    this.creating = false;
    this.teamsService.addTeam(this.nameTeamField.value)
      .then(() => {
        this.popup.closeAll();
        this.nameTeamField.patchValue(null);
      });
  }

  cancelCreate(): void {
    this.creating = false;
    this.popup.closeAll();
    this.nameTeamField.patchValue(null);
  }

}
