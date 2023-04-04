import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgaeComponent } from './algae.component';

describe('AlgaeComponent', () => {
  let component: AlgaeComponent;
  let fixture: ComponentFixture<AlgaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
