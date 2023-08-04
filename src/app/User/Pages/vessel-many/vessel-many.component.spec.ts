import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselManyComponent } from './vessel-many.component';

describe('VesselManyComponent', () => {
  let component: VesselManyComponent;
  let fixture: ComponentFixture<VesselManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselManyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
