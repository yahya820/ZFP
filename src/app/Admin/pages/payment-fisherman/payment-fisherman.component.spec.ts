import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFishermanComponent } from './payment-fisherman.component';

describe('PaymentFishermanComponent', () => {
  let component: PaymentFishermanComponent;
  let fixture: ComponentFixture<PaymentFishermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentFishermanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentFishermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
