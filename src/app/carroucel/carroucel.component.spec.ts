import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroucelComponent } from './carroucel.component';

describe('CarroucelComponent', () => {
  let component: CarroucelComponent;
  let fixture: ComponentFixture<CarroucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroucelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
