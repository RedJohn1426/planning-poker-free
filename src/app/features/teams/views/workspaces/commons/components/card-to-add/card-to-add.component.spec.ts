import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardToAddComponent } from './card-to-add.component';

describe('CardToAddComponent', () => {
  let component: CardToAddComponent;
  let fixture: ComponentFixture<CardToAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardToAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardToAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
