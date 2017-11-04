import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDropdownComponent } from './button-dropdown.component';

describe('ButtonDropdownComponent', () => {
  let component: ButtonDropdownComponent;
  let fixture: ComponentFixture<ButtonDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
