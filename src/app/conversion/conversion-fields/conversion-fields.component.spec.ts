import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionFieldsComponent } from './conversion-fields.component';

describe('ConversionFieldsComponent', () => {
  let component: ConversionFieldsComponent;
  let fixture: ComponentFixture<ConversionFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
