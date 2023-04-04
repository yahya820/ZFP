import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVesselComponent } from './view-vessel.component';

describe('ViewVesselComponent', () => {
  let component: ViewVesselComponent;
  let fixture: ComponentFixture<ViewVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVesselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
