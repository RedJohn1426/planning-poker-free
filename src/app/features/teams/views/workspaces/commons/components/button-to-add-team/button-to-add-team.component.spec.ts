import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToAddTeamComponent } from './button-to-add-team.component';

describe('ButtonToAddTeamComponent', () => {
  let component: ButtonToAddTeamComponent;
  let fixture: ComponentFixture<ButtonToAddTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToAddTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
