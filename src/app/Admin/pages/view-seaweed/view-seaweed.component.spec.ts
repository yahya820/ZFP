import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeaweedComponent } from './view-seaweed.component';

describe('ViewSeaweedComponent', () => {
  let component: ViewSeaweedComponent;
  let fixture: ComponentFixture<ViewSeaweedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSeaweedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSeaweedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
