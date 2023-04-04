import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFisherComponent } from './confirm-fisher.component';

describe('ConfirmFisherComponent', () => {
  let component: ConfirmFisherComponent;
  let fixture: ComponentFixture<ConfirmFisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmFisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmFisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
