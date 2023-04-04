import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmVesselComponent } from './confirm-vessel.component';

describe('ConfirmVesselComponent', () => {
  let component: ConfirmVesselComponent;
  let fixture: ComponentFixture<ConfirmVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmVesselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
