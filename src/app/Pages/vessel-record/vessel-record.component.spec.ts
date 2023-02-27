import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselRecordComponent } from './vessel-record.component';

describe('VesselRecordComponent', () => {
  let component: VesselRecordComponent;
  let fixture: ComponentFixture<VesselRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
