import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDropdownComponent } from './image-dropdown.component';

describe('ImageDropdownComponent', () => {
  let component: ImageDropdownComponent;
  let fixture: ComponentFixture<ImageDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
