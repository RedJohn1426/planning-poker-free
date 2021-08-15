import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ppf-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() teamToFind = new EventEmitter<string>();
  @Output() working = new EventEmitter<boolean>();

  readonly iconSearch: IconDefinition = faSearch;

  form: FormGroup;

  get searchedTeamName(): FormControl {
    return this.form.get('searchWord') as FormControl;
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      searchWord: new FormControl('', Validators.pattern('[A-Za-z]+_'))
    });
  }

  ngOnInit(): void {
    this.searchedTeamName?.valueChanges
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.teamToFind.emit(value);
        this.working.emit(!!value.length);
      });
  }

}
