import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFishermanComponent } from './view-fisherman.component';

describe('ViewFishermanComponent', () => {
  let component: ViewFishermanComponent;
  let fixture: ComponentFixture<ViewFishermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFishermanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFishermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
