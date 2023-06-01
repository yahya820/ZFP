import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVesselComponent } from './card-vessel.component';

describe('CardVesselComponent', () => {
  let component: CardVesselComponent;
  let fixture: ComponentFixture<CardVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVesselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
