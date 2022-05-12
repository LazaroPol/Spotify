import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAccountComponent } from './button-account.component';

describe('ButtonAccountComponent', () => {
  let component: ButtonAccountComponent;
  let fixture: ComponentFixture<ButtonAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
