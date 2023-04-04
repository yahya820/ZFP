import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselRecComponent } from './vessel-rec.component';

describe('VesselRecComponent', () => {
  let component: VesselRecComponent;
  let fixture: ComponentFixture<VesselRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
