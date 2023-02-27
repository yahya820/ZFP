import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselRegComponent } from './vessel-reg.component';

describe('VesselRegComponent', () => {
  let component: VesselRegComponent;
  let fixture: ComponentFixture<VesselRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
