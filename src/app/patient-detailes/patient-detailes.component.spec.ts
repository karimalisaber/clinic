import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailesComponent } from './patient-detailes.component';

describe('PatientDetailesComponent', () => {
  let component: PatientDetailesComponent;
  let fixture: ComponentFixture<PatientDetailesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDetailesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
