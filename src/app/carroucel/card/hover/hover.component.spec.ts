import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverComponent } from './hover.component';

describe('HoverComponent', () => {
  let component: HoverComponent;
  let fixture: ComponentFixture<HoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
