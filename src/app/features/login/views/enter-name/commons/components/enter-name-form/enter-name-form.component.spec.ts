import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNameFormComponent } from './enter-name-form.component';

describe('EnterNameFormComponent', () => {
  let component: EnterNameFormComponent;
  let fixture: ComponentFixture<EnterNameFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterNameFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
