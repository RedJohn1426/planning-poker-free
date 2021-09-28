import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnterPasswordComponent } from './modal-enter-password.component';

describe('ModalEnterPasswordComponent', () => {
  let component: ModalEnterPasswordComponent;
  let fixture: ComponentFixture<ModalEnterPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEnterPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnterPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
