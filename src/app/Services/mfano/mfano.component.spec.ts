import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfanoComponent } from './mfano.component';

describe('MfanoComponent', () => {
  let component: MfanoComponent;
  let fixture: ComponentFixture<MfanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
