import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFisherComponent } from './view-fisher.component';

describe('ViewFisherComponent', () => {
  let component: ViewFisherComponent;
  let fixture: ComponentFixture<ViewFisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
