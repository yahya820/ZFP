import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdFishermanComponent } from './apd-fisherman.component';

describe('ApdFishermanComponent', () => {
  let component: ApdFishermanComponent;
  let fixture: ComponentFixture<ApdFishermanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApdFishermanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApdFishermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
