import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsVesselComponent } from './tabs-vessel.component';

describe('TabsVesselComponent', () => {
  let component: TabsVesselComponent;
  let fixture: ComponentFixture<TabsVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsVesselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
