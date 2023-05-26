import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishermanComponent } from './fisherman.component';

describe('FishermanComponent', () => {
  let component: FishermanComponent;
  let fixture: ComponentFixture<FishermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishermanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FishermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
