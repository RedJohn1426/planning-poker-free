import { Component, OnInit } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'pp-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

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
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        console.log(value);
      });
  }

}
