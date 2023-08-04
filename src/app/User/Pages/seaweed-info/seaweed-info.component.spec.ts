import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaweedInfoComponent } from './seaweed-info.component';

describe('SeaweedInfoComponent', () => {
  let component: SeaweedInfoComponent;
  let fixture: ComponentFixture<SeaweedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaweedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeaweedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
