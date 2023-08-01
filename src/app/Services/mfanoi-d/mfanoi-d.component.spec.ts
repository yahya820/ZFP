import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfanoiDComponent } from './mfanoi-d.component';

describe('MfanoiDComponent', () => {
  let component: MfanoiDComponent;
  let fixture: ComponentFixture<MfanoiDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfanoiDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfanoiDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
