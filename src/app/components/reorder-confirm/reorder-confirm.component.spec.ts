import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReorderConfirmComponent } from './reorder-confirm.component';

describe('ReorderConfirmComponent', () => {
  let component: ReorderConfirmComponent;
  let fixture: ComponentFixture<ReorderConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReorderConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReorderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
