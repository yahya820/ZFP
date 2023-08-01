import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentVesselComponent } from './payment-vessel.component';

describe('PaymentVesselComponent', () => {
  let component: PaymentVesselComponent;
  let fixture: ComponentFixture<PaymentVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentVesselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
