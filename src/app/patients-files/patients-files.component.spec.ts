import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsFilesComponent } from './patients-files.component';

describe('PatientsFilesComponent', () => {
  let component: PatientsFilesComponent;
  let fixture: ComponentFixture<PatientsFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
