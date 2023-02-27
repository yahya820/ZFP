import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselPDFComponent } from './vessel-pdf.component';

describe('VesselPDFComponent', () => {
  let component: VesselPDFComponent;
  let fixture: ComponentFixture<VesselPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselPDFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
