import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdVesselComponent } from './apd-vessel.component';

describe('ApdVesselComponent', () => {
  let component: ApdVesselComponent;
  let fixture: ComponentFixture<ApdVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApdVesselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApdVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
